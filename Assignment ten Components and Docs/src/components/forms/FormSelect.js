import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
} from '@chakra-ui/react';

/**
 * FormSelect Component
 * A customizable select dropdown component with validation
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Label for the select
 * @param {string} props.name - Name attribute for the select
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Selected value
 * @param {function} props.onChange - Change handler
 * @param {Array} props.options - Array of options {value, label}
 * @param {boolean} props.isRequired - Whether the field is required
 * @param {boolean} props.isInvalid - Whether the field has validation errors
 * @param {string} props.errorMessage - Error message to display
 * @param {string} props.helperText - Helper text to display
 * @param {Object} props.selectProps - Additional props for the Select component
 */
const FormSelect = ({
  label,
  name,
  placeholder = 'Select an option',
  value,
  onChange,
  options = [],
  isRequired = false,
  isInvalid = false,
  errorMessage,
  helperText,
  selectProps = {},
  ...props
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid} {...props}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      
      <Select
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...selectProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      
      {helperText && !isInvalid && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
      
      {isInvalid && errorMessage && (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormSelect;
