import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from '@chakra-ui/react';

/**
 * CustomTabs Component
 * A customizable tabs component for organizing content
 * 
 * @param {Object} props - Component props
 * @param {Array} props.tabs - Array of tab objects {label, content}
 * @param {string} props.orientation - Tab orientation ('horizontal' or 'vertical')
 * @param {string} props.variant - Tab variant ('line', 'enclosed', 'enclosed-colored', 'soft-rounded', 'solid-rounded', 'unstyled')
 * @param {string} props.colorScheme - Color scheme for tabs
 * @param {number} props.defaultIndex - Default active tab index
 * @param {boolean} props.isLazy - Lazy load tab content
 * @param {Object} props.tabsProps - Additional props for the Tabs component
 */
const CustomTabs = ({
  tabs = [],
  orientation = 'horizontal',
  variant = 'line',
  colorScheme = 'blue',
  defaultIndex = 0,
  isLazy = false,
  tabsProps = {},
  ...props
}) => {
  return (
    <Tabs
      orientation={orientation}
      variant={variant}
      colorScheme={colorScheme}
      defaultIndex={defaultIndex}
      isLazy={isLazy}
      {...tabsProps}
      {...props}
    >
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index}>
            {typeof tab.label === 'string' ? (
              <Box>{tab.label}</Box>
            ) : (
              tab.label
            )}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} p={4}>
            {typeof tab.content === 'string' ? (
              <Box>{tab.content}</Box>
            ) : (
              tab.content
            )}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default CustomTabs;
