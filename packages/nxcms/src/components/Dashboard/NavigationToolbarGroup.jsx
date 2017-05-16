import React from 'react';
import { Link } from 'react-router-dom';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import GlobeIcon from 'material-ui/svg-icons/action/language';

import ResponsiveToolbarButton from './DashboardAppBar/ResponsiveToolbarButton';
import AccountEditIcon from './svg-icons/AccountEditIcon';

const NavigationToolbarGroup = () => (
  <ToolbarGroup>
    <Link to="/">
      <ResponsiveToolbarButton
        label="Visit Blog"
        icon={<GlobeIcon />}
        phoneVisible
      />
    </Link>
    <ResponsiveToolbarButton label="Edit Profile" icon={<AccountEditIcon />} />
  </ToolbarGroup>
);

export default NavigationToolbarGroup;
