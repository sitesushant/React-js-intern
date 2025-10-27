# Chakra UI Component Library

A comprehensive collection of reusable UI components built with Chakra UI, featuring form components, interactive elements, and custom hooks.

## 🚀 Features

- **Form Components**: Input, Select, Checkbox, Radio with validation
- **UI Components**: Accordion, Tabs, Buttons, Tables, Sliders, Dropdowns, Image Slider
- **Custom Hooks**: useLocalStorage, useDebounce
- **Fully Documented**: Complete API documentation with examples
- **TypeScript Ready**: Full TypeScript support
- **Accessible**: Built with accessibility in mind using Chakra UI

## 📦 Installation

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## 🎯 Quick Start

```jsx
import { ChakraProvider } from '@chakra-ui/react';
import { FormInput, Button, Accordion } from './components';

function App() {
  return (
    <ChakraProvider>
      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />
      <Button variant="solid" colorScheme="blue">
        Submit
      </Button>
    </ChakraProvider>
  );
}
```

## 📚 Components

### Form Components

#### FormInput
A customizable input component with validation and helper text.

```jsx
<FormInput
  label="Email Address"
  name="email"
  type="email"
  placeholder="Enter your email"
  isRequired
  helperText="We'll never share your email"
  showPasswordToggle={type === 'password'}
/>
```

**Props:**
- `label` (string): Label for the input
- `name` (string): Name attribute for the input
- `type` (string): Input type (text, email, password, etc.)
- `placeholder` (string): Placeholder text
- `value` (string): Input value
- `onChange` (function): Change handler
- `isRequired` (boolean): Whether the field is required
- `isInvalid` (boolean): Whether the field has validation errors
- `errorMessage` (string): Error message to display
- `helperText` (string): Helper text to display
- `leftIcon` (ReactNode): Left icon element
- `rightIcon` (ReactNode): Right icon element
- `showPasswordToggle` (boolean): Show password toggle for password inputs

#### FormSelect
A customizable select dropdown component with validation.

```jsx
<FormSelect
  label="Country"
  name="country"
  placeholder="Select your country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' }
  ]}
  isRequired
/>
```

**Props:**
- `label` (string): Label for the select
- `name` (string): Name attribute for the select
- `placeholder` (string): Placeholder text
- `value` (string): Selected value
- `onChange` (function): Change handler
- `options` (Array): Array of options {value, label}
- `isRequired` (boolean): Whether the field is required
- `isInvalid` (boolean): Whether the field has validation errors
- `errorMessage` (string): Error message to display
- `helperText` (string): Helper text to display

#### FormCheckbox
A customizable checkbox component with validation.

```jsx
<FormCheckbox
  label="I agree to the terms"
  name="terms"
  isRequired
/>

// Multiple checkboxes
<FormCheckbox
  label="Select Features"
  name="features"
  isMultiple
  options={[
    { value: 'feature1', label: 'Feature 1' },
    { value: 'feature2', label: 'Feature 2' }
  ]}
/>
```

**Props:**
- `label` (string): Label for the checkbox
- `name` (string): Name attribute for the checkbox
- `value` (string|Array): Selected value(s)
- `onChange` (function): Change handler
- `options` (Array): Array of options for multiple checkboxes
- `isRequired` (boolean): Whether the field is required
- `isInvalid` (boolean): Whether the field has validation errors
- `errorMessage` (string): Error message to display
- `helperText` (string): Helper text to display
- `isMultiple` (boolean): Whether multiple selections are allowed
- `direction` (string): Direction of checkbox layout ('row' or 'column')

#### FormRadio
A customizable radio button component with validation.

```jsx
<FormRadio
  label="Size"
  name="size"
  options={[
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ]}
  direction="column"
/>
```

**Props:**
- `label` (string): Label for the radio group
- `name` (string): Name attribute for the radio group
- `value` (string): Selected value
- `onChange` (function): Change handler
- `options` (Array): Array of options {value, label}
- `isRequired` (boolean): Whether the field is required
- `isInvalid` (boolean): Whether the field has validation errors
- `errorMessage` (string): Error message to display
- `helperText` (string): Helper text to display
- `direction` (string): Direction of radio layout ('row' or 'column')

### UI Components

#### Accordion
A customizable accordion component for collapsible content.

```jsx
<Accordion
  items={[
    {
      title: 'What is Chakra UI?',
      content: 'Chakra UI is a simple, modular and accessible component library.'
    }
  ]}
  allowMultiple
  allowToggle
/>
```

**Props:**
- `items` (Array): Array of accordion items {title, content}
- `allowMultiple` (boolean): Allow multiple panels to be open
- `allowToggle` (boolean): Allow panels to be toggled
- `defaultIndex` (number): Default open panel index
- `variant` (string): Accordion variant ('default', 'filled', 'unstyled')

#### Tabs
A customizable tabs component for organizing content.

```jsx
<Tabs
  tabs={[
    {
      label: 'Overview',
      content: 'This is the overview content.'
    }
  ]}
  variant="enclosed"
  colorScheme="blue"
/>
```

**Props:**
- `tabs` (Array): Array of tab objects {label, content}
- `orientation` (string): Tab orientation ('horizontal' or 'vertical')
- `variant` (string): Tab variant ('line', 'enclosed', 'enclosed-colored', etc.)
- `colorScheme` (string): Color scheme for tabs
- `defaultIndex` (number): Default active tab index
- `isLazy` (boolean): Lazy load tab content

#### Button
A customizable button component with various styles and states.

```jsx
<Button
  variant="solid"
  colorScheme="blue"
  size="md"
  isLoading={loading}
  leftIcon={<AddIcon />}
  onClick={handleClick}
>
  Add Item
</Button>
```

**Props:**
- `variant` (string): Button variant ('solid', 'outline', 'ghost', 'link')
- `colorScheme` (string): Color scheme ('blue', 'green', 'red', etc.)
- `size` (string): Button size ('xs', 'sm', 'md', 'lg', 'xl')
- `isLoading` (boolean): Show loading spinner
- `isDisabled` (boolean): Disable the button
- `isFullWidth` (boolean): Make button full width
- `leftIcon` (ReactNode): Icon to show on the left
- `rightIcon` (ReactNode): Icon to show on the right
- `onClick` (function): Click handler

#### Table
A customizable table component with sorting and styling options.

```jsx
<Table
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true }
  ]}
  data={[
    { name: 'John Doe', email: 'john@example.com' }
  ]}
  variant="striped"
  colorScheme="gray"
/>
```

**Props:**
- `columns` (Array): Array of column definitions {key, label, sortable, render}
- `data` (Array): Array of data objects
- `caption` (string): Table caption
- `variant` (string): Table variant ('simple', 'striped', 'unstyled')
- `colorScheme` (string): Color scheme for striped variant
- `size` (string): Table size ('sm', 'md', 'lg')
- `isSortable` (boolean): Enable sorting functionality
- `onSort` (function): Sort handler function

#### Slider
A customizable slider component with labels and marks.

```jsx
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
```

**Props:**
- `min` (number): Minimum value
- `max` (number): Maximum value
- `step` (number): Step value
- `value` (number): Current value
- `onChange` (function): Change handler
- `label` (string): Label for the slider
- `showValue` (boolean): Show current value
- `showMarks` (boolean): Show marks on the slider
- `marks` (Array): Array of mark objects {value, label}
- `colorScheme` (string): Color scheme
- `size` (string): Slider size ('sm', 'md', 'lg')
- `isDisabled` (boolean): Disable the slider

#### Dropdown
A customizable dropdown menu component.

```jsx
<Dropdown
  trigger="Actions"
  options={[
    { value: 'edit', label: 'Edit', icon: <EditIcon /> },
    { value: 'delete', label: 'Delete', icon: <DeleteIcon /> }
  ]}
  onSelect={(option) => console.log('Selected:', option)}
/>
```

**Props:**
- `options` (Array): Array of dropdown options
- `trigger` (string|ReactNode): Trigger element or text
- `triggerVariant` (string): Trigger button variant
- `triggerColorScheme` (string): Trigger button color scheme
- `triggerSize` (string): Trigger button size
- `placement` (string): Menu placement
- `isLazy` (boolean): Lazy load menu content
- `closeOnSelect` (boolean): Close menu on item select
- `onSelect` (function): Selection handler

#### ImageSlider
A customizable image slider/carousel component.

```jsx
<ImageSlider
  images={[
    {
      src: 'https://example.com/image1.jpg',
      alt: 'Image 1',
      caption: 'Beautiful landscape'
    }
  ]}
  height="400px"
  autoPlay
  autoPlayInterval={3000}
  showArrows
  showDots
  showCaptions
/>
```

**Props:**
- `images` (Array): Array of image objects {src, alt, caption}
- `currentIndex` (number): Current image index
- `onIndexChange` (function): Index change handler
- `showArrows` (boolean): Show navigation arrows
- `showDots` (boolean): Show dot indicators
- `showCaptions` (boolean): Show image captions
- `autoPlay` (boolean): Enable auto-play
- `autoPlayInterval` (number): Auto-play interval in milliseconds
- `height` (string): Slider height
- `width` (string): Slider width
- `objectFit` (string): Image object fit property
- `loop` (boolean): Loop through images

## 🪝 Custom Hooks

### useLocalStorage
A hook for managing localStorage with React state.

```jsx
import { useLocalStorage } from './hooks';

const [value, setValue] = useLocalStorage('key', 'defaultValue');
```

**Parameters:**
- `key` (string): The localStorage key
- `initialValue` (any): Initial value if key doesn't exist

**Returns:**
- `[storedValue, setValue]`: [storedValue, setValue]

### useDebounce
A hook for debouncing values.

```jsx
import { useDebounce } from './hooks';

const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);
```

**Parameters:**
- `value` (any): The value to debounce
- `delay` (number): Delay in milliseconds

**Returns:**
- `debouncedValue`: The debounced value

## 🎨 Theming

The component library uses Chakra UI's theming system. You can customize the theme by extending the default theme:

```jsx
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f3ff',
      500: '#0073e6',
      900: '#00111a',
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
});
```

## 📱 Responsive Design

All components are built with responsive design in mind and work seamlessly across different screen sizes.

## ♿ Accessibility

Components are built with accessibility in mind using Chakra UI's accessibility features:
- Proper ARIA labels
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Chakra UI](https://chakra-ui.com/) for the amazing component library
- [React](https://reactjs.org/) for the framework
- [Framer Motion](https://www.framer.com/motion/) for animations
