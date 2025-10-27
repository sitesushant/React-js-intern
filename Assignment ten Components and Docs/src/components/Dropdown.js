import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

/**
 * CustomDropdown Component
 * A customizable dropdown menu component
 * 
 * @param {Object} props - Component props
 * @param {Array} props.options - Array of dropdown options
 * @param {string|React.ReactNode} props.trigger - Trigger element or text
 * @param {string} props.triggerVariant - Trigger button variant
 * @param {string} props.triggerColorScheme - Trigger button color scheme
 * @param {string} props.triggerSize - Trigger button size
 * @param {string} props.placement - Menu placement
 * @param {boolean} props.isLazy - Lazy load menu content
 * @param {boolean} props.closeOnSelect - Close menu on item select
 * @param {function} props.onSelect - Selection handler
 * @param {Object} props.menuProps - Additional props for the Menu component
 */
const CustomDropdown = ({
  options = [],
  trigger = 'Select Option',
  triggerVariant = 'outline',
  triggerColorScheme = 'blue',
  triggerSize = 'md',
  placement = 'bottom-start',
  isLazy = true,
  closeOnSelect = true,
  onSelect,
  menuProps = {},
  ...props
}) => {
  const [selectedValue, setSelectedValue] = React.useState(null);

  const handleSelect = (option) => {
    setSelectedValue(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  const renderTrigger = () => {
    if (typeof trigger === 'string') {
      return (
        <Button
          variant={triggerVariant}
          colorScheme={triggerColorScheme}
          size={triggerSize}
          rightIcon={<ChevronDownIcon />}
        >
          {selectedValue ? selectedValue.label : trigger}
        </Button>
      );
    }
    return trigger;
  };

  return (
    <Menu
      placement={placement}
      isLazy={isLazy}
      closeOnSelect={closeOnSelect}
      {...menuProps}
      {...props}
    >
      <MenuButton as={Button}>
        {renderTrigger()}
      </MenuButton>
      
      <MenuList>
        {options.map((option, index) => {
          if (option.type === 'divider') {
            return <MenuDivider key={index} />;
          }
          
          if (option.type === 'group') {
            return (
              <MenuGroup key={index} title={option.title}>
                {option.items.map((item, itemIndex) => (
                  <MenuItem
                    key={itemIndex}
                    onClick={() => handleSelect(item)}
                    icon={item.icon}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </MenuGroup>
            );
          }
          
          return (
            <MenuItem
              key={index}
              onClick={() => handleSelect(option)}
              icon={option.icon}
              isDisabled={option.disabled}
            >
              {option.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

/**
 * MultiSelectDropdown Component
 * A dropdown component for multiple selections
 * 
 * @param {Object} props - Component props
 * @param {Array} props.options - Array of dropdown options
 * @param {Array} props.selectedValues - Currently selected values
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.triggerVariant - Trigger button variant
 * @param {string} props.triggerColorScheme - Trigger button color scheme
 * @param {string} props.triggerSize - Trigger button size
 * @param {function} props.onChange - Change handler
 * @param {Object} props.menuProps - Additional props for the Menu component
 */
const MultiSelectDropdown = ({
  options = [],
  selectedValues = [],
  placeholder = 'Select Options',
  triggerVariant = 'outline',
  triggerColorScheme = 'blue',
  triggerSize = 'md',
  onChange,
  menuProps = {},
  ...props
}) => {
  const [selected, setSelected] = React.useState(selectedValues);

  const handleToggle = (option) => {
    const newSelected = selected.includes(option.value)
      ? selected.filter(val => val !== option.value)
      : [...selected, option.value];
    
    setSelected(newSelected);
    if (onChange) {
      onChange(newSelected);
    }
  };

  const getDisplayText = () => {
    if (selected.length === 0) return placeholder;
    if (selected.length === 1) {
      const option = options.find(opt => opt.value === selected[0]);
      return option ? option.label : selected[0];
    }
    return `${selected.length} selected`;
  };

  return (
    <Menu closeOnSelect={false} {...menuProps} {...props}>
      <MenuButton as={Button} variant={triggerVariant} colorScheme={triggerColorScheme} size={triggerSize} rightIcon={<ChevronDownIcon />}>
        {getDisplayText()}
      </MenuButton>
      
      <MenuList>
        <MenuOptionGroup type="checkbox" value={selected}>
          {options.map((option, index) => (
            <MenuItemOption
              key={index}
              value={option.value}
              onClick={() => handleToggle(option)}
              icon={option.icon}
            >
              {option.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export { CustomDropdown as Dropdown, MultiSelectDropdown };
export default CustomDropdown;
