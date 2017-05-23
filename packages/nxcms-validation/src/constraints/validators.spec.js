import { expect } from 'chai';
import validate from '../validate';
import { bool, datetime, tagArray } from './validators';

describe('validators', () => {
  describe('bool', () => {
    const constraints = { someBoolField: bool };

    it('returns error if no value provided', () => {
      const obj = {};
      const errors = validate(obj, constraints);

      expect(errors.someBoolField[0]).to.include('true or false');
    });

    it('no error on bool', () => {
      const obj = { someBoolField: false };
      const errors = validate(obj, constraints);

      expect(errors).to.not.exist;
    });
  });

  describe('datetime', () => {
    const constraints = { someDateField: datetime };

    it('returns no error on empty', () => {
      const obj = {};
      const errors = validate(obj, constraints);

      expect(errors).to.not.exist;
    });

    it('returns no error on valid date', () => {
      const obj = { someDateField: new Date() };
      const errors = validate(obj, constraints);

      expect(errors).to.not.exist;
    });

    it('returns error if date is out of range (sanity check)', () => {
      const obj = { someDateField: new Date('Jan 01 1000') };
      const errors = validate(obj, constraints);

      expect(errors.someDateField[0]).to.contain('sanity check');
    });
  });

  describe('tags', () => {
    const constraints = { tagField: tagArray };

    it('returns error if not present', () => {
      const obj = {};
      const errors = validate(obj, constraints);

      expect(errors).to.exist;
    });

    it('returns error if not an array', () => {
      const obj = { tagField: null };
      const errors = validate(obj, constraints);

      expect(errors.tagField[0]).to.exist;
    });

    it('returns error on invalid characters', () => {
      const obj = { tagField: ['test$'] };
      const errors = validate(obj, constraints);

      expect(errors.tagField[0]).to.contain('contain only');
    });

    it('accepts empty array', () => {
      const obj = { tagField: [] };
      const errors = validate(obj, constraints);

      expect(errors).to.not.exist;
    });

    it('accepts valid values', () => {
      const obj = { tagField: ['JavaScript', 'Webpack2', 'Coding Styles'] };
      const errors = validate(obj, constraints);

      expect(errors).to.not.exist;
    });
  });
});
