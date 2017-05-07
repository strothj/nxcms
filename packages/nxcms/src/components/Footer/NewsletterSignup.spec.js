import React from 'react';
import { shallowWithContext } from 'test-utils';
import NewsletterSignup from './NewsletterSignup';

describe('<NewsletterSignup />', () => {
  it('renders without crashing', () => {
    shallowWithContext(<NewsletterSignup />);
  });
});
