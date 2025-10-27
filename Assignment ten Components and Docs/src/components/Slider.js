import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';

/**
 * CustomSlider Component
 * A customizable slider component with labels and marks
 * 
 * @param {Object} props - Component props
 * @param {number} props.min - Minimum value
 * @param {number} props.max - Maximum value
 * @param {number} props.step - Step value
 * @param {number|Array} props.value - Current value(s)
 * @param {function} props.onChange - Change handler
 * @param {function} props.onChangeEnd - Change end handler
 * @param {string} props.label - Label for the slider
 * @param {boolean} props.showValue - Show current value
 * @param {boolean} props.showMarks - Show marks on the slider
 * @param {Array} props.marks - Array of mark objects {value, label}
 * @param {string} props.colorScheme - Color scheme
 * @param {string} props.size - Slider size ('sm', 'md', 'lg')
 * @param {boolean} props.isDisabled - Disable the slider
 * @param {boolean} props.isReversed - Reverse the slider direction
 * @param {Object} props.sliderProps - Additional props for the Slider component
 */
const CustomSlider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  onChangeEnd,
  label,
  showValue = true,
  showMarks = false,
  marks = [],
  colorScheme = 'blue',
  size = 'md',
  isDisabled = false,
  isReversed = false,
  sliderProps = {},
  ...props
}) => {
  const [sliderValue, setSliderValue] = React.useState(value || min);

  const handleChange = (val) => {
    setSliderValue(val);
    if (onChange) {
      onChange(val);
    }
  };

  const handleChangeEnd = (val) => {
    if (onChangeEnd) {
      onChangeEnd(val);
    }
  };

  return (
    <VStack spacing={2} align="stretch" {...props}>
      {label && (
        <HStack justify="space-between">
          <Text fontSize="sm" fontWeight="medium">
            {label}
          </Text>
          {showValue && (
            <Text fontSize="sm" color="gray.600">
              {sliderValue}
            </Text>
          )}
        </HStack>
      )}
      
      <Box px={3}>
        <Slider
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          onChange={handleChange}
          onChangeEnd={handleChangeEnd}
          colorScheme={colorScheme}
          size={size}
          isDisabled={isDisabled}
          isReversed={isReversed}
          {...sliderProps}
        >
          {showMarks && marks.map((mark, index) => (
            <SliderMark
              key={index}
              value={mark.value}
              mt={1}
              ml={-2}
              fontSize="sm"
            >
              {mark.label}
            </SliderMark>
          ))}
          
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          
          <SliderThumb />
        </Slider>
      </Box>
    </VStack>
  );
};

/**
 * RangeSlider Component
 * A slider component for selecting a range of values
 * 
 * @param {Object} props - Component props
 * @param {number} props.min - Minimum value
 * @param {number} props.max - Maximum value
 * @param {number} props.step - Step value
 * @param {Array} props.value - Current range values [min, max]
 * @param {function} props.onChange - Change handler
 * @param {function} props.onChangeEnd - Change end handler
 * @param {string} props.label - Label for the slider
 * @param {boolean} props.showValues - Show current values
 * @param {string} props.colorScheme - Color scheme
 * @param {string} props.size - Slider size
 * @param {boolean} props.isDisabled - Disable the slider
 * @param {Object} props.sliderProps - Additional props for the Slider component
 */
const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  value = [min, max],
  onChange,
  onChangeEnd,
  label,
  showValues = true,
  colorScheme = 'blue',
  size = 'md',
  isDisabled = false,
  sliderProps = {},
  ...props
}) => {
  const [rangeValue, setRangeValue] = React.useState(value);

  const handleChange = (val) => {
    setRangeValue(val);
    if (onChange) {
      onChange(val);
    }
  };

  const handleChangeEnd = (val) => {
    if (onChangeEnd) {
      onChangeEnd(val);
    }
  };

  return (
    <VStack spacing={2} align="stretch" {...props}>
      {label && (
        <HStack justify="space-between">
          <Text fontSize="sm" fontWeight="medium">
            {label}
          </Text>
          {showValues && (
            <Text fontSize="sm" color="gray.600">
              {rangeValue[0]} - {rangeValue[1]}
            </Text>
          )}
        </HStack>
      )}
      
      <Box px={3}>
        <Slider
          min={min}
          max={max}
          step={step}
          value={rangeValue}
          onChange={handleChange}
          onChangeEnd={handleChangeEnd}
          colorScheme={colorScheme}
          size={size}
          isDisabled={isDisabled}
          {...sliderProps}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          
          <SliderThumb index={0} />
          <SliderThumb index={1} />
        </Slider>
      </Box>
    </VStack>
  );
};

export { CustomSlider as Slider, RangeSlider };
export default CustomSlider;
