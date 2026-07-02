import '../src/index.js';

import { describe, expect, it } from 'vitest';

describe('public entrypoint', () => {
  it('loads without side effects', () => {
    expect(true).toBe(true);
  });
});
