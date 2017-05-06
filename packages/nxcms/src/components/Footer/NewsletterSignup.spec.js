import React from 'react';
import { shallow } from 'enzyme';
import NewsletterSignup from './NewsletterSignup';

describe('<NewsletterSignup />', () => {
  it('renders without crashing', () => {
    shallow(<NewsletterSignup />);
  });
});
