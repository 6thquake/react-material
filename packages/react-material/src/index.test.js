/* eslint import/namespace: ['error', { allowComputed: true }] */
/**
 * Important: This test also serves as a point to
 * import the entire lib for coverage reporting
 */

import { assert } from 'chai';
import * as ReactMaterial from './index';

describe('react-material', () => {
  it('should have exports', () => {
    assert.strictEqual(typeof ReactMaterial, 'object');
  });

  it('should not do undefined exports', () => {
    Object.keys(ReactMaterial).forEach(exportKey =>
      assert.strictEqual(Boolean(ReactMaterial[exportKey]), true),
    );
  });
});
