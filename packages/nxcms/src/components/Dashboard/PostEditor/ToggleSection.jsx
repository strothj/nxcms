import React from 'react';
import { List, ListItem } from 'material-ui/List';
import InfoOutlineIcon from 'material-ui/svg-icons/action/info-outline';

const ToggleSectionContent = ({ children }) => <div>{children}</div>;

const ToggleSection = ({ label, children, initiallyOpen }) => (
  <List>
    <ListItem
      primaryText={label}
      primaryTogglesNestedList
      initiallyOpen={initiallyOpen}
      leftIcon={<InfoOutlineIcon />}
      nestedItems={[
        <ToggleSectionContent key="1">{children}</ToggleSectionContent>,
      ]}
    />
  </List>
);

export default ToggleSection;
