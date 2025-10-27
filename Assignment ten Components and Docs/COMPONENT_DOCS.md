# Component Documentation

## Form Components

### FormInput

A versatile input component with built-in validation, icons, and password toggle functionality.

#### Basic Usage
```jsx
<FormInput
  label="Email Address"
  name="email"
  type="email"
  placeholder="Enter your email"
/>
```

#### With Validation
```jsx
<FormInput
  label="Password"
  name="password"
  type="password"
  placeholder="Enter your password"
  isRequired
  isInvalid={hasError}
  errorMessage="Password is required"
  showPasswordToggle
/>
```

#### With Icons
```jsx
<FormInput
  label="Search"
  name="search"
  placeholder="Search..."
  leftIcon={<SearchIcon />}
  rightIcon={<FilterIcon />}
/>
```

### FormSelect

A dropdown select component with validation support.

#### Basic Usage
```jsx
<FormSelect
  label="Country"
  name="country"
  placeholder="Select your country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' }
  ]}
/>
```

#### With Validation
```jsx
<FormSelect
  label="Priority"
  name="priority"
  placeholder="Select priority"
  options={priorityOptions}
  isRequired
  isInvalid={!selectedPriority}
  errorMessage="Please select a priority"
/>
```

### FormCheckbox

A checkbox component supporting both single and multiple selections.

#### Single Checkbox
```jsx
<FormCheckbox
  label="I agree to the terms and conditions"
  name="terms"
  isRequired
/>
```

#### Multiple Checkboxes
```jsx
<FormCheckbox
  label="Select Features"
  name="features"
  isMultiple
  options={[
    { value: 'feature1', label: 'Feature 1' },
    { value: 'feature2', label: 'Feature 2' },
    { value: 'feature3', label: 'Feature 3' }
  ]}
  direction="column"
/>
```

### FormRadio

A radio button component for single selection from multiple options.

```jsx
<FormRadio
  label="Size"
  name="size"
  options={[
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ]}
  direction="row"
/>
```

## UI Components

### Accordion

A collapsible content component for organizing information.

#### Basic Usage
```jsx
<Accordion
  items={[
    {
      title: 'What is Chakra UI?',
      content: 'Chakra UI is a simple, modular and accessible component library.'
    },
    {
      title: 'How to install?',
      content: 'You can install it using npm or yarn.'
    }
  ]}
/>
```

#### With Multiple Panels Open
```jsx
<Accordion
  items={accordionItems}
  allowMultiple
  defaultIndex={[0, 2]}
/>
```

### Tabs

A tabbed interface for organizing content.

#### Basic Usage
```jsx
<Tabs
  tabs={[
    {
      label: 'Overview',
      content: 'This is the overview content.'
    },
    {
      label: 'Details',
      content: 'This is the details content.'
    }
  ]}
/>
```

#### With Different Variants
```jsx
<Tabs
  tabs={tabItems}
  variant="enclosed"
  colorScheme="blue"
  orientation="vertical"
/>
```

### Button

A versatile button component with multiple variants and states.

#### Basic Buttons
```jsx
<Button variant="solid" colorScheme="blue">
  Solid Button
</Button>

<Button variant="outline" colorScheme="green">
  Outline Button
</Button>

<Button variant="ghost" colorScheme="red">
  Ghost Button
</Button>
```

#### With Icons and States
```jsx
<Button
  variant="solid"
  colorScheme="blue"
  leftIcon={<AddIcon />}
  isLoading={loading}
  loadingText="Saving..."
>
  Save Changes
</Button>
```

#### Button Groups
```jsx
<ButtonGroup>
  <Button>Save</Button>
  <Button variant="outline">Cancel</Button>
</ButtonGroup>
```

#### Icon Buttons
```jsx
<IconButton
  aria-label="Add item"
  icon={<AddIcon />}
  colorScheme="blue"
/>
```

### Table

A data table component with sorting and styling options.

#### Basic Table
```jsx
<Table
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', sortable: true }
  ]}
  data={[
    { name: 'John Doe', email: 'john@example.com', role: 'Developer' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' }
  ]}
/>
```

#### With Custom Rendering
```jsx
<Table
  columns={[
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <Badge colorScheme={value === 'active' ? 'green' : 'red'}>
          {value}
        </Badge>
      )
    }
  ]}
  data={tableData}
  variant="striped"
  colorScheme="gray"
/>
```

### Slider

A range input component with labels and marks.

#### Basic Slider
```jsx
<Slider
  label="Volume"
  min={0}
  max={100}
  defaultValue={50}
  showValue
/>
```

#### With Marks
```jsx
<Slider
  label="Temperature"
  min={0}
  max={100}
  defaultValue={25}
  showMarks
  marks={[
    { value: 0, label: '0°C' },
    { value: 25, label: '25°C' },
    { value: 50, label: '50°C' },
    { value: 100, label: '100°C' }
  ]}
/>
```

#### Range Slider
```jsx
<RangeSlider
  label="Price Range"
  min={0}
  max={1000}
  defaultValue={[100, 500]}
  showValues
/>
```

### Dropdown

A dropdown menu component for actions and selections.

#### Basic Dropdown
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

#### Multi-Select Dropdown
```jsx
<MultiSelectDropdown
  placeholder="Select multiple options"
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]}
  onChange={(values) => console.log('Selected:', values)}
/>
```

### ImageSlider

A carousel component for displaying multiple images.

#### Basic Image Slider
```jsx
<ImageSlider
  images={[
    {
      src: 'https://example.com/image1.jpg',
      alt: 'Image 1',
      caption: 'Beautiful landscape'
    },
    {
      src: 'https://example.com/image2.jpg',
      alt: 'Image 2',
      caption: 'Ocean view'
    }
  ]}
  height="400px"
/>
```

#### With Auto-play
```jsx
<ImageSlider
  images={images}
  height="300px"
  autoPlay
  autoPlayInterval={3000}
  showArrows
  showDots
  showCaptions
  loop
/>
```

## Custom Hooks

### useLocalStorage

A hook for managing localStorage with React state.

```jsx
import { useLocalStorage } from './hooks';

function MyComponent() {
  const [name, setName] = useLocalStorage('userName', '');
  const [settings, setSettings] = useLocalStorage('userSettings', {});

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
```

### useDebounce

A hook for debouncing values, useful for search inputs.

```jsx
import { useDebounce } from './hooks';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search API call
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

## Best Practices

### Form Validation
- Always provide clear error messages
- Use `isRequired` for mandatory fields
- Validate on both client and server side
- Provide helpful placeholder text

### Accessibility
- Always provide proper labels
- Use semantic HTML elements
- Ensure keyboard navigation works
- Test with screen readers

### Performance
- Use `isLazy` for tabs with heavy content
- Implement proper loading states
- Debounce search inputs
- Optimize image sizes in ImageSlider

### Styling
- Use consistent color schemes
- Follow the design system
- Test on different screen sizes
- Use theme colors for consistency
