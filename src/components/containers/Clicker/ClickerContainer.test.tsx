import * as React from 'react';
import { shallow } from 'enzyme';
import ClickerContainer from './ClickerContainer';

it('renders without crashing', () => {
  shallow(<ClickerContainer someProps="asdf" />);
});