import React from 'react';
import {
  Box,
  Image,
  IconButton,
  Text,
  Circle,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

/**
 * ImageSlider Component
 * A customizable image slider/carousel component
 * 
 * @param {Object} props - Component props
 * @param {Array} props.images - Array of image objects {src, alt, caption}
 * @param {number} props.currentIndex - Current image index
 * @param {function} props.onIndexChange - Index change handler
 * @param {boolean} props.showArrows - Show navigation arrows
 * @param {boolean} props.showDots - Show dot indicators
 * @param {boolean} props.showCaptions - Show image captions
 * @param {boolean} props.autoPlay - Enable auto-play
 * @param {number} props.autoPlayInterval - Auto-play interval in milliseconds
 * @param {string} props.height - Slider height
 * @param {string} props.width - Slider width
 * @param {string} props.objectFit - Image object fit property
 * @param {boolean} props.loop - Loop through images
 * @param {Object} props.sliderProps - Additional props for the slider container
 */
const ImageSlider = ({
  images = [],
  currentIndex = 0,
  onIndexChange,
  showArrows = true,
  showDots = true,
  showCaptions = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  height = '400px',
  width = '100%',
  objectFit = 'cover',
  loop = true,
  sliderProps = {},
  ...props
}) => {
  const [activeIndex, setActiveIndex] = React.useState(currentIndex);
  const intervalRef = React.useRef(null);

  const isMobile = useBreakpointValue({ base: true, md: false });

  React.useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  React.useEffect(() => {
    if (autoPlay && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= images.length) {
            return loop ? 0 : prevIndex;
          }
          return nextIndex;
        });
      }, autoPlayInterval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoPlay, autoPlayInterval, images.length, loop]);

  const goToPrevious = () => {
    const newIndex = activeIndex - 1;
    if (newIndex < 0) {
      if (loop) {
        setActiveIndex(images.length - 1);
      }
    } else {
      setActiveIndex(newIndex);
    }
  };

  const goToNext = () => {
    const newIndex = activeIndex + 1;
    if (newIndex >= images.length) {
      if (loop) {
        setActiveIndex(0);
      }
    } else {
      setActiveIndex(newIndex);
    }
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  React.useEffect(() => {
    if (onIndexChange) {
      onIndexChange(activeIndex);
    }
  }, [activeIndex, onIndexChange]);

  if (images.length === 0) {
    return (
      <Box
        height={height}
        width={width}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
        borderRadius="md"
        {...sliderProps}
        {...props}
      >
        <Text color="gray.500">No images to display</Text>
      </Box>
    );
  }

  return (
    <Box
      position="relative"
      height={height}
      width={width}
      overflow="hidden"
      borderRadius="md"
      {...sliderProps}
      {...props}
    >
      {/* Main Image */}
      <Box
        position="relative"
        height="100%"
        width="100%"
      >
        <Image
          src={images[activeIndex]?.src}
          alt={images[activeIndex]?.alt || `Image ${activeIndex + 1}`}
          height="100%"
          width="100%"
          objectFit={objectFit}
        />
        
        {/* Caption */}
        {showCaptions && images[activeIndex]?.caption && (
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            bg="blackAlpha.600"
            color="white"
            p={4}
          >
            <Text fontSize="sm">{images[activeIndex].caption}</Text>
          </Box>
        )}
      </Box>

      {/* Navigation Arrows */}
      {showArrows && images.length > 1 && (
        <>
          <IconButton
            aria-label="Previous image"
            icon={<ChevronLeftIcon />}
            position="absolute"
            left={2}
            top="50%"
            transform="translateY(-50%)"
            size={isMobile ? 'sm' : 'md'}
            bg="blackAlpha.500"
            color="white"
            _hover={{ bg: 'blackAlpha.700' }}
            onClick={goToPrevious}
            isDisabled={!loop && activeIndex === 0}
          />
          
          <IconButton
            aria-label="Next image"
            icon={<ChevronRightIcon />}
            position="absolute"
            right={2}
            top="50%"
            transform="translateY(-50%)"
            size={isMobile ? 'sm' : 'md'}
            bg="blackAlpha.500"
            color="white"
            _hover={{ bg: 'blackAlpha.700' }}
            onClick={goToNext}
            isDisabled={!loop && activeIndex === images.length - 1}
          />
        </>
      )}

      {/* Dot Indicators */}
      {showDots && images.length > 1 && (
        <Flex
          position="absolute"
          bottom={4}
          left="50%"
          transform="translateX(-50%)"
          gap={2}
        >
          {images.map((_, index) => (
            <Circle
              key={index}
              size={2}
              bg={index === activeIndex ? 'white' : 'whiteAlpha.500'}
              cursor="pointer"
              onClick={() => goToSlide(index)}
              _hover={{ bg: 'whiteAlpha.700' }}
            />
          ))}
        </Flex>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <Box
          position="absolute"
          top={4}
          right={4}
          bg="blackAlpha.500"
          color="white"
          px={2}
          py={1}
          borderRadius="md"
          fontSize="sm"
        >
          {activeIndex + 1} / {images.length}
        </Box>
      )}
    </Box>
  );
};

export default ImageSlider;
