import React from 'react';
import {
  Button as ChakraButton,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';

/**
 * CustomButton Component
 * A customizable button component with various styles and states
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant ('solid', 'outline', 'ghost', 'link')
 * @param {string} props.colorScheme - Color scheme ('blue', 'green', 'red', etc.)
 * @param {string} props.size - Button size ('xs', 'sm', 'md', 'lg', 'xl')
 * @param {boolean} props.isLoading - Show loading spinner
 * @param {boolean} props.isDisabled - Disable the button
 * @param {boolean} props.isFullWidth - Make button full width
 * @param {React.ReactNode} props.leftIcon - Icon to show on the left
 * @param {React.ReactNode} props.rightIcon - Icon to show on the right
 * @param {React.ReactNode} props.children - Button content
 * @param {function} props.onClick - Click handler
 * @param {Object} props.buttonProps - Additional props for the Button component
 */
const CustomButton = ({
  variant = 'solid',
  colorScheme = 'blue',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  isFullWidth = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  buttonProps = {},
  ...props
}) => {
  return (
    <ChakraButton
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      isLoading={isLoading}
      isDisabled={isDisabled}
      width={isFullWidth ? '100%' : 'auto'}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClick={onClick}
      {...buttonProps}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

/**
 * CustomButtonGroup Component
 * A group of buttons with consistent spacing
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant
 * @param {string} props.colorScheme - Color scheme
 * @param {string} props.size - Button size
 * @param {string} props.spacing - Spacing between buttons
 * @param {boolean} props.isAttached - Attach buttons together
 * @param {React.ReactNode} props.children - Button elements
 * @param {Object} props.groupProps - Additional props for the ButtonGroup component
 */
const CustomButtonGroup = ({
  variant = 'solid',
  colorScheme = 'blue',
  size = 'md',
  spacing = 2,
  isAttached = false,
  children,
  groupProps = {},
  ...props
}) => {
  return (
    <ButtonGroup
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      spacing={spacing}
      isAttached={isAttached}
      {...groupProps}
      {...props}
    >
      {children}
    </ButtonGroup>
  );
};

/**
 * CustomIconButton Component
 * A button that only contains an icon
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant
 * @param {string} props.colorScheme - Color scheme
 * @param {string} props.size - Button size
 * @param {string} props.ariaLabel - Accessibility label
 * @param {React.ReactNode} props.icon - Icon to display
 * @param {boolean} props.isLoading - Show loading spinner
 * @param {boolean} props.isDisabled - Disable the button
 * @param {function} props.onClick - Click handler
 * @param {Object} props.iconButtonProps - Additional props for the IconButton component
 */
const CustomIconButton = ({
  variant = 'solid',
  colorScheme = 'blue',
  size = 'md',
  ariaLabel,
  icon,
  isLoading = false,
  isDisabled = false,
  onClick,
  iconButtonProps = {},
  ...props
}) => {
  return (
    <IconButton
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      aria-label={ariaLabel}
      icon={icon}
      isLoading={isLoading}
      isDisabled={isDisabled}
      onClick={onClick}
      {...iconButtonProps}
      {...props}
    />
  );
};

export { CustomButton as Button, CustomButtonGroup as ButtonGroup, CustomIconButton as IconButton };
export default CustomButton;
