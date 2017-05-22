import { expect } from 'chai';
import validate from './validate';

describe('validate', () => {
  it('should have datetime validator configured', () => {
    const constraints = { someDateField: { datetime: true } };
    const obj = { someDateField: new Date('1 1 2000') };

    expect(() => validate(obj, constraints)).to.not.throw();
  });
});
