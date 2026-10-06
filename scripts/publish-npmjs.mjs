#!/usr/bin/env node
/**
 * Public npmjs publish, then wait until anonymous `npm view` sees the package.
 *
 * Usage: node scripts/publish-npmjs.mjs [dist-tag]
 */
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const REGISTRY = 'https://registry.npmjs.org';
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const tag = process.argv[2] || 'latest';
const userconfig = process.env.NPM_CONFIG_USERCONFIG;

const authEnv = { ...process.env, npm_config_registry: REGISTRY };
const publicEnv = {
  ...process.env,
  NODE_AUTH_TOKEN: '',
  NPM_TOKEN: '',
  NPM_CONFIG_USERCONFIG: '',
  npm_config_registry: REGISTRY,
};

function authArgs(args) {
  return userconfig ? ['--userconfig', userconfig, ...args] : args;
}

function publicView() {
  return execFileSync(
    'npm',
    ['view', pkg.name, 'version', '--registry', REGISTRY, '--loglevel', 'error'],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], env: publicEnv },
  ).trim();
}

function tokenHint() {
  return `
${pkg.name} is still not a public package on ${REGISTRY}.

A 404 on PUT/GET for a *new* scoped name means the granular NPM_TOKEN cannot
create packages under @dashflowx. Recreate the token with write on the
**@dashflowx scope**, update GitHub secret NPM_TOKEN, re-run Publish npm.
Do not paste the token in chat.
`;
}

let exists = false;
try {
  publicView();
  exists = true;
} catch {
  exists = false;
}

const publishArgs = authArgs([
  'publish',
  '--access',
  'public',
  '--tag',
  tag,
  '--ignore-scripts',
  '--registry',
  REGISTRY,
  `--@dashflowx:registry=${REGISTRY}`,
]);
if (exists) {
  publishArgs.push('--provenance');
  console.log(`${pkg.name} exists on npmjs — publishing with provenance`);
} else {
  console.log(`${pkg.name} is new on npmjs — first publish without --provenance`);
}

try {
  execFileSync('npm', publishArgs, { stdio: 'inherit', env: authEnv });
} catch (e) {
  console.error(tokenHint());
  process.exit(e.status || 1);
}

for (let i = 1; i <= 12; i += 1) {
  try {
    const ver = publicView();
    console.log(`Public npmjs has ${pkg.name}@${ver}`);
    process.exit(0);
  } catch {
    console.log(`Waiting for public npmjs listing of ${pkg.name} (${i}/12)`);
    execFileSync('sleep', ['5']);
  }
}

console.error(
  `${pkg.name} publish exited 0 but anonymous npm view on ${REGISTRY} still 404s.${tokenHint()}`,
);
process.exit(1);
