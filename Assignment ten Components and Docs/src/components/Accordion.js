import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react';

/**
 * CustomAccordion Component
 * A customizable accordion component for collapsible content
 * 
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of accordion items {title, content}
 * @param {boolean} props.allowMultiple - Allow multiple panels to be open
 * @param {boolean} props.allowToggle - Allow panels to be toggled
 * @param {number} props.defaultIndex - Default open panel index
 * @param {string} props.variant - Accordion variant ('default', 'filled', 'unstyled')
 * @param {Object} props.accordionProps - Additional props for the Accordion component
 */
const CustomAccordion = ({
  items = [],
  allowMultiple = false,
  allowToggle = true,
  defaultIndex = 0,
  variant = 'default',
  accordionProps = {},
  ...props
}) => {
  return (
    <Accordion
      allowMultiple={allowMultiple}
      allowToggle={allowToggle}
      defaultIndex={defaultIndex}
      variant={variant}
      {...accordionProps}
      {...props}
    >
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {typeof item.title === 'string' ? (
                  <Text fontWeight="medium">{item.title}</Text>
                ) : (
                  item.title
                )}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {typeof item.content === 'string' ? (
              <Text>{item.content}</Text>
            ) : (
              item.content
            )}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
