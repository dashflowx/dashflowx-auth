import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

describe('@dashflowx/auth package', () => {
  it('publishes as @dashflowx/auth with dist-only files', () => {
    const pkg = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf8'));
    expect(pkg.name).toBe('@dashflowx/auth');
    expect(pkg.files).toEqual(['dist']);
    expect(pkg.publishConfig?.access).toBe('public');
  });

  it('ships a private auth-pro package for GitHub Packages', () => {
    const pkg = JSON.parse(readFileSync(join(process.cwd(), 'auth-pro/package.json'), 'utf8'));
    expect(pkg.name).toBe('@dashflowx/auth-pro');
    expect(pkg.publishConfig?.registry).toBe('https://npm.pkg.github.com');
  });
});
