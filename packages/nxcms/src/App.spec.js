import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    console.log(process.env.NODE_ENV); // eslint-disable-line no-console
    shallow(<App />);
  });
});
