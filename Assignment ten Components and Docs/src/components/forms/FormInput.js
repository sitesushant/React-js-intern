import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

/**
 * FormInput Component
 * A customizable input component with validation and helper text
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Label for the input
 * @param {string} props.name - Name attribute for the input
 * @param {string} props.type - Input type (text, email, password, etc.)
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Input value
 * @param {function} props.onChange - Change handler
 * @param {boolean} props.isRequired - Whether the field is required
 * @param {boolean} props.isInvalid - Whether the field has validation errors
 * @param {string} props.errorMessage - Error message to display
 * @param {string} props.helperText - Helper text to display
 * @param {React.ReactNode} props.leftIcon - Left icon element
 * @param {React.ReactNode} props.rightIcon - Right icon element
 * @param {boolean} props.showPasswordToggle - Show password toggle for password inputs
 * @param {Object} props.inputProps - Additional props for the Input component
 */
const FormInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  isRequired = false,
  isInvalid = false,
  errorMessage,
  helperText,
  leftIcon,
  rightIcon,
  showPasswordToggle = false,
  inputProps = {},
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === 'password';

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid} {...props}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      
      <InputGroup>
        {leftIcon && (
          <InputLeftElement pointerEvents="none">
            {leftIcon}
          </InputLeftElement>
        )}
        
        <Input
          id={name}
          name={name}
          type={isPassword && showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...inputProps}
        />
        
        {isPassword && showPasswordToggle && (
          <InputRightElement>
            <IconButton
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              variant="ghost"
              size="sm"
              onClick={handlePasswordToggle}
            />
          </InputRightElement>
        )}
        
        {rightIcon && !isPassword && (
          <InputRightElement pointerEvents="none">
            {rightIcon}
          </InputRightElement>
        )}
      </InputGroup>
      
      {helperText && !isInvalid && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
      
      {isInvalid && errorMessage && (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormInput;
