# Installation Guide

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Step 1: Install Dependencies

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Step 2: Set up ChakraProvider

Wrap your app with the ChakraProvider in your main entry point:

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
```

## Step 3: Create Theme (Optional)

Create a custom theme file:

```jsx
// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f3ff',
      100: '#b3d9ff',
      200: '#80bfff',
      300: '#4da6ff',
      400: '#1a8cff',
      500: '#0073e6',
      600: '#005bb3',
      700: '#004280',
      800: '#002a4d',
      900: '#00111a',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
});

export default theme;
```

## Step 4: Import Components

Import the components you need:

```jsx
import {
  FormInput,
  FormSelect,
  Button,
  Accordion,
  Tabs,
  Table,
  Slider,
  Dropdown,
  ImageSlider,
} from './components';
```

## Step 5: Use Components

Start using the components in your application:

```jsx
function MyComponent() {
  return (
    <div>
      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />
      <Button variant="solid" colorScheme="blue">
        Submit
      </Button>
    </div>
  );
}
```

## Running the Application

```bash
npm start
```

The application will start on `http://localhost:3000`.

## Building for Production

```bash
npm run build
```

This will create a production build in the `build` folder.

## Troubleshooting

### Common Issues

1. **Module not found errors**: Make sure all dependencies are installed correctly
2. **Styling issues**: Ensure ChakraProvider is wrapping your app
3. **TypeScript errors**: Make sure you have the correct type definitions

### Getting Help

- Check the [Chakra UI documentation](https://chakra-ui.com/)
- Review the component examples in the main App.js file
- Check the README.md for detailed component documentation
