import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
  CheckboxGroup,
  Stack,
} from '@chakra-ui/react';

/**
 * FormCheckbox Component
 * A customizable checkbox component with validation
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Label for the checkbox group
 * @param {string} props.name - Name attribute for the checkbox
 * @param {string|Array} props.value - Selected value(s)
 * @param {function} props.onChange - Change handler
 * @param {Array} props.options - Array of options for multiple checkboxes
 * @param {boolean} props.isRequired - Whether the field is required
 * @param {boolean} props.isInvalid - Whether the field has validation errors
 * @param {string} props.errorMessage - Error message to display
 * @param {string} props.helperText - Helper text to display
 * @param {boolean} props.isMultiple - Whether multiple selections are allowed
 * @param {string} props.direction - Direction of checkbox layout ('row' or 'column')
 * @param {Object} props.checkboxProps - Additional props for the Checkbox component
 */
const FormCheckbox = ({
  label,
  name,
  value,
  onChange,
  options = [],
  isRequired = false,
  isInvalid = false,
  errorMessage,
  helperText,
  isMultiple = false,
  direction = 'column',
  checkboxProps = {},
  ...props
}) => {
  if (isMultiple && options.length > 0) {
    return (
      <FormControl isRequired={isRequired} isInvalid={isInvalid} {...props}>
        {label && <FormLabel>{label}</FormLabel>}
        
        <CheckboxGroup value={value} onChange={onChange}>
          <Stack direction={direction} spacing={2}>
            {options.map((option) => (
              <Checkbox
                key={option.value}
                value={option.value}
                {...checkboxProps}
              >
                {option.label}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
        
        {helperText && !isInvalid && (
          <FormHelperText>{helperText}</FormHelperText>
        )}
        
        {isInvalid && errorMessage && (
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        )}
      </FormControl>
    );
  }

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid} {...props}>
      <Checkbox
        name={name}
        isChecked={value}
        onChange={onChange}
        {...checkboxProps}
      >
        {label}
      </Checkbox>
      
      {helperText && !isInvalid && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
      
      {isInvalid && errorMessage && (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormCheckbox;
