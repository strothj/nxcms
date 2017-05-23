import { expect } from 'chai';
import { constraints, validate } from '@nxcms/validation';
import validPosts from './validPosts';

const postConstraints = constraints.posts;

describe('validPosts', () => {
  const posts = validPosts();

  it('mock object objects have expected number of fields', () => {
    expect(Object.keys(posts[0])).to.have.length(
      Object.keys(postConstraints).length
    );
  });

  it('pass validation', () => {
    posts.forEach(p => {
      console.log(validate(p, postConstraints)); // eslint-disable-line no-console
      expect(validate(p, postConstraints)).to.not.exist;
    });
  });
});
