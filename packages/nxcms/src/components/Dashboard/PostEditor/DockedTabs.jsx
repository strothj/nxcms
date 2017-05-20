import Radium from 'radium';
import React, { Children, cloneElement } from 'react';
import Tabs from 'material-ui/Tabs/Tabs';
import { breakpoints } from 'styles';

const styles = {
  // Fill the page body, adjusting for the mobile view.
  tabsContainer: {
    position: 'fixed',
    left: 0,
    top: 70 /* Appbar */,
    bottom: 0,
    right: 0,
    [`@media ${breakpoints.tablet}`]: { left: 256 },
  },

  // Match the tab button's colors to that of the main appbar.
  tabsControl: {
    backgroundColor: 'rgb(38, 50, 56)',
  },

  // Provide the ability to scroll content beneath the toolbars.
  tabBodyWrapper: {
    paddingTop: 0,
    overflowY: 'auto',
    height: 'calc(100vh - 118px)',
  },
};

const DockedTabs = ({ children, ...props }) => {
  // It is necessary to wrap the children tab components here due to the way
  // the material-ui's tab control manipulates each tab's children.
  const tabs = Children.map(children, t =>
    cloneElement(t, {
      children: <div style={styles.tabBodyWrapper}>{t.props.children}</div>,
    })
  );

  return (
    <div style={styles.tabsContainer}>
      <Tabs {...props} tabItemContainerStyle={styles.tabsControl}>
        {tabs}
      </Tabs>
    </div>
  );
};

export default Radium(DockedTabs);
