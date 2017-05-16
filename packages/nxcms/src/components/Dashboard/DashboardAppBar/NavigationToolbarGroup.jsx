import React from 'react';
import { Link } from 'react-router-dom';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import GlobeIcon from 'material-ui/svg-icons/action/language';
import ResponsiveToolbarButton from './ResponsiveToolbarButton';

const NavigationToolbarGroup = () => (
  <ToolbarGroup>
    <Link to="/">
      <ResponsiveToolbarButton label="Visit Blog" icon={<GlobeIcon />} />
    </Link>
  </ToolbarGroup>
);

export default NavigationToolbarGroup;
