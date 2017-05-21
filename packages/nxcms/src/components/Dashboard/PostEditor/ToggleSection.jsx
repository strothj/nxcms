import React from 'react';
import { List, ListItem } from 'material-ui/List';

const ToggleSectionContent = ({ children }) => (
  <div style={{ padding: '0 24px' }}>{children}</div>
);

const ToggleSection = ({ label, children, initiallyOpen }) => (
  <List>
    <ListItem
      primaryText={label}
      primaryTogglesNestedList
      initiallyOpen={initiallyOpen}
      nestedItems={[
        <ToggleSectionContent key="1">{children}</ToggleSectionContent>,
      ]}
    />
  </List>
);

export default ToggleSection;
