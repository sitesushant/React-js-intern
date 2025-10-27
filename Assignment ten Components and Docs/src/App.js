import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Code,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FormInput,
  FormSelect,
  FormCheckbox,
  FormRadio,
  Accordion,
  Tabs,
  Button,
  ButtonGroup,
  IconButton,
  Table,
  Slider,
  RangeSlider,
  Dropdown,
  MultiSelectDropdown,
  ImageSlider,
} from './components';
import { useLocalStorage, useDebounce } from './hooks';
import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';

function App() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  // Sample data for components
  const accordionItems = [
    {
      title: 'What is Chakra UI?',
      content: 'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.'
    },
    {
      title: 'How to install Chakra UI?',
      content: 'You can install Chakra UI using npm or yarn: npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion'
    },
    {
      title: 'Is it free to use?',
      content: 'Yes, Chakra UI is completely free and open source under the MIT license.'
    }
  ];

  const tabItems = [
    {
      label: 'Overview',
      content: 'This is the overview tab content. Here you can see general information about the component library.'
    },
    {
      label: 'Components',
      content: 'This tab shows all available components in the library including forms, UI elements, and interactive components.'
    },
    {
      label: 'Hooks',
      content: 'Custom hooks are available for common functionality like localStorage management and debouncing.'
    }
  ];

  const tableColumns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
  ];

  const tableData = [
    { name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
  ];

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const checkboxOptions = [
    { value: 'feature1', label: 'Feature 1' },
    { value: 'feature2', label: 'Feature 2' },
    { value: 'feature3', label: 'Feature 3' },
  ];

  const radioOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  const dropdownOptions = [
    { value: 'edit', label: 'Edit', icon: <EditIcon /> },
    { value: 'delete', label: 'Delete', icon: <DeleteIcon /> },
    { type: 'divider' },
    { value: 'settings', label: 'Settings' },
  ];

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      alt: 'Mountain landscape',
      caption: 'Beautiful mountain landscape'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      alt: 'Ocean view',
      caption: 'Peaceful ocean view'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      alt: 'Forest path',
      caption: 'Serene forest path'
    }
  ];

  // Custom hooks demo
  const [storedValue, setStoredValue] = useLocalStorage('demo-key', 'Hello World');
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading size="2xl" mb={4} color="brand.500">
              Chakra UI Component Library
            </Heading>
            <Text fontSize="lg" color="gray.600">
              A comprehensive collection of reusable UI components built with Chakra UI
            </Text>
          </Box>

          {/* Custom Hooks Demo */}
          <Box bg={cardBg} p={6} borderRadius="lg" shadow="md">
            <Heading size="lg" mb={4}>Custom Hooks</Heading>
            <VStack spacing={4} align="stretch">
              <Box>
                <Text fontWeight="medium" mb={2}>useLocalStorage Hook</Text>
                <HStack>
                  <FormInput
                    value={storedValue}
                    onChange={(e) => setStoredValue(e.target.value)}
                    placeholder="Enter value to store"
                  />
                  <Text fontSize="sm" color="gray.600">
                    Stored: {storedValue}
                  </Text>
                </HStack>
              </Box>
              
              <Box>
                <Text fontWeight="medium" mb={2}>useDebounce Hook</Text>
                <HStack>
                  <FormInput
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Type to see debounced value"
                  />
                  <Text fontSize="sm" color="gray.600">
                    Debounced: {debouncedSearchTerm}
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </Box>

          {/* Form Components */}
          <Box bg={cardBg} p={6} borderRadius="lg" shadow="md">
            <Heading size="lg" mb={4}>Form Components</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              <GridItem>
                <VStack spacing={4} align="stretch">
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    helperText="We'll never share your email"
                  />
                  
                  <FormSelect
                    label="Country"
                    name="country"
                    placeholder="Select your country"
                    options={selectOptions}
                  />
                  
                  <FormCheckbox
                    label="I agree to the terms and conditions"
                    name="terms"
                  />
                </VStack>
              </GridItem>
              
              <GridItem>
                <VStack spacing={4} align="stretch">
                  <FormCheckbox
                    label="Select Features"
                    name="features"
                    isMultiple
                    options={checkboxOptions}
                    direction="column"
                  />
                  
                  <FormRadio
                    label="Size"
                    name="size"
                    options={radioOptions}
                    direction="column"
                  />
                </VStack>
              </GridItem>
            </Grid>
          </Box>

          {/* UI Components */}
          <Box bg={cardBg} p={6} borderRadius="lg" shadow="md">
            <Heading size="lg" mb={4}>UI Components</Heading>
            
            {/* Accordion */}
            <Box mb={8}>
              <Heading size="md" mb={4}>Accordion</Heading>
              <Accordion items={accordionItems} allowToggle />
            </Box>

            <Divider mb={8} />

            {/* Tabs */}
            <Box mb={8}>
              <Heading size="md" mb={4}>Tabs</Heading>
              <Tabs tabs={tabItems} variant="enclosed" />
            </Box>

            <Divider mb={8} />

            {/* Buttons */}
            <Box mb={8}>
              <Heading size="md" mb={4}>Buttons</Heading>
              <VStack spacing={4} align="stretch">
                <HStack spacing={4} wrap="wrap">
                  <Button variant="solid" colorScheme="blue">Solid</Button>
                  <Button variant="outline" colorScheme="green">Outline</Button>
                  <Button variant="ghost" colorScheme="red">Ghost</Button>
                  <Button variant="link" colorScheme="purple">Link</Button>
                </HStack>
                
                <HStack spacing={4} wrap="wrap">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </HStack>
                
                <HStack spacing={4} wrap="wrap">
                  <Button isLoading loadingText="Loading...">Loading</Button>
                  <Button isDisabled>Disabled</Button>
                  <Button leftIcon={<AddIcon />}>With Icon</Button>
                </HStack>
                
                <ButtonGroup>
                  <Button>Save</Button>
                  <Button>Cancel</Button>
                </ButtonGroup>
                
                <HStack spacing={4}>
                  <IconButton aria-label="Add" icon={<AddIcon />} />
                  <IconButton aria-label="Edit" icon={<EditIcon />} />
                  <IconButton aria-label="Delete" icon={<DeleteIcon />} />
                </HStack>
              </VStack>
            </Box>

            <Divider mb={8} />

            {/* Table */}
            <Box mb={8}>
              <Heading size="md" mb={4}>Table</Heading>
              <Table
                columns={tableColumns}
                data={tableData}
                variant="striped"
                colorScheme="gray"
                caption="User Management Table"
              />
            </Box>

            <Divider mb={8} />

            {/* Slider */}
            <Box mb={8}>
              <Heading size="md" mb={4}>Sliders</Heading>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                <GridItem>
                  <Slider
                    label="Volume"
                    min={0}
                    max={100}
                    defaultValue={50}
                    showMarks
                    marks={[
                      { value: 0, label: '0' },
                      { value: 50, label: '50' },
                      { value: 100, label: '100' }
                    ]}
                  />
                </GridItem>
                <GridItem>
                  <RangeSlider
                    label="Price Range"
                    min={0}
                    max={1000}
                    defaultValue={[100, 500]}
                  />
                </GridItem>
              </Grid>
            </Box>

            <Divider mb={8} />

            {/* Dropdown */}
            <Box mb={8}>
              <Heading size="md" mb={4}>Dropdowns</Heading>
              <HStack spacing={4} wrap="wrap">
                <Dropdown
                  trigger="Actions"
                  options={dropdownOptions}
                  onSelect={(option) => console.log('Selected:', option)}
                />
                <MultiSelectDropdown
                  placeholder="Select multiple options"
                  options={selectOptions}
                  onChange={(values) => console.log('Selected values:', values)}
                />
              </HStack>
            </Box>

            <Divider mb={8} />

            {/* Image Slider */}
            <Box mb={8}>
              <Heading size="md" mb={4}>Image Slider</Heading>
              <ImageSlider
                images={images}
                height="300px"
                autoPlay
                autoPlayInterval={3000}
                showArrows
                showDots
                showCaptions
              />
            </Box>
          </Box>

          {/* Usage Examples */}
          <Box bg={cardBg} p={6} borderRadius="lg" shadow="md">
            <Heading size="lg" mb={4}>Usage Examples</Heading>
            <VStack spacing={6} align="stretch">
              <Box>
                <Heading size="md" mb={2}>FormInput Usage</Heading>
                <Code p={4} bg="gray.100" borderRadius="md" fontSize="sm" whiteSpace="pre-wrap">
{`import { FormInput } from './components';

<FormInput
  label="Email Address"
  name="email"
  type="email"
  placeholder="Enter your email"
  isRequired
  helperText="We'll never share your email"
  showPasswordToggle={type === 'password'}
/>`}
                </Code>
              </Box>
              
              <Box>
                <Heading size="md" mb={2}>Button Usage</Heading>
                <Code p={4} bg="gray.100" borderRadius="md" fontSize="sm" whiteSpace="pre-wrap">
{`import { Button, ButtonGroup } from './components';

<Button
  variant="solid"
  colorScheme="blue"
  size="md"
  isLoading={loading}
  leftIcon={<AddIcon />}
  onClick={handleClick}
>
  Add Item
</Button>`}
                </Code>
              </Box>
              
              <Box>
                <Heading size="md" mb={2}>Custom Hooks Usage</Heading>
                <Code p={4} bg="gray.100" borderRadius="md" fontSize="sm" whiteSpace="pre-wrap">
{`import { useLocalStorage, useDebounce } from './hooks';

// useLocalStorage
const [value, setValue] = useLocalStorage('key', 'defaultValue');

// useDebounce
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);`}
                </Code>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
