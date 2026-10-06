import { describe, expect, it } from 'vitest';
import { resolveAuthVariant, showsAuthPreview } from './types';

describe('auth variants', () => {
  it('prefers variant, then the legacy varient spelling, then basic', () => {
    expect(resolveAuthVariant('card', 'minimal')).toBe('card');
    expect(resolveAuthVariant(undefined, 'minimal')).toBe('minimal');
    expect(resolveAuthVariant()).toBe('basic');
  });

  it('shows the preview panel only for basic and split', () => {
    expect(showsAuthPreview('basic')).toBe(true);
    expect(showsAuthPreview('split')).toBe(true);
    expect(showsAuthPreview('card')).toBe(false);
    expect(showsAuthPreview('minimal')).toBe(false);
  });
});
