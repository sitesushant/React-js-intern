import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

/**
 * FormRadio Component
 * A customizable radio button component with validation
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Label for the radio group
 * @param {string} props.name - Name attribute for the radio group
 * @param {string} props.value - Selected value
 * @param {function} props.onChange - Change handler
 * @param {Array} props.options - Array of options {value, label}
 * @param {boolean} props.isRequired - Whether the field is required
 * @param {boolean} props.isInvalid - Whether the field has validation errors
 * @param {string} props.errorMessage - Error message to display
 * @param {string} props.helperText - Helper text to display
 * @param {string} props.direction - Direction of radio layout ('row' or 'column')
 * @param {Object} props.radioProps - Additional props for the Radio component
 */
const FormRadio = ({
  label,
  name,
  value,
  onChange,
  options = [],
  isRequired = false,
  isInvalid = false,
  errorMessage,
  helperText,
  direction = 'column',
  radioProps = {},
  ...props
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid} {...props}>
      {label && <FormLabel>{label}</FormLabel>}
      
      <RadioGroup name={name} value={value} onChange={onChange}>
        <Stack direction={direction} spacing={2}>
          {options.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              {...radioProps}
            >
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      
      {helperText && !isInvalid && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
      
      {isInvalid && errorMessage && (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormRadio;
