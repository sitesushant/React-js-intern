# React Assignment Features

This project implements the following features as requested:

## ✅ Portal Modal Popup
- **Location**: `src/components/organisms/Modal.jsx`
- **Features**:
  - Uses ReactDOM.createPortal to render modal outside the component tree
  - Renders to `#modal-root` element in the DOM
  - Includes backdrop click to close
  - Smooth animations (fade in/out, slide in)
  - Accessible with proper focus management

## ✅ IntersectionObserver for Image Slider
- **Location**: `src/components/organisms/ImageSlider.jsx`
- **Features**:
  - Uses IntersectionObserver API to detect when slider comes into view
  - Only renders images when scrolled into view (performance optimization)
  - Auto-advancing slideshow with 2-second intervals
  - Interactive dot navigation
  - Smooth transitions and hover effects
  - Responsive design with proper aspect ratios

## ✅ Custom Hook for Data Fetching
- **Location**: `src/hooks/useFetch.js`
- **Features**:
  - Custom hook that encapsulates fetch logic
  - Returns `{ data, loading, error }` states
  - Proper error handling with HTTP status checks
  - Loading states for better UX
  - Reusable across components

## ✅ Theme Provider and Context
- **Location**: `src/context/ThemeContext.jsx`
- **Features**:
  - React Context for global theme state management
  - `useTheme()` hook for easy theme access
  - Toggle between light and dark modes
  - Persistent theme switching
  - CSS classes applied to root element
  - Smooth transitions between themes

## Additional Features Implemented

### Enhanced UI/UX
- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Works on all screen sizes
- **Smooth Animations**: CSS transitions for all interactions
- **Accessibility**: Proper focus management and keyboard navigation

### Component Architecture
- **Atomic Design**: Organized components into atoms, molecules, organisms, pages, and templates
- **Separation of Concerns**: Clear separation between logic, presentation, and styling
- **Reusable Components**: Modular design for easy maintenance

### Performance Optimizations
- **Lazy Loading**: Images only load when in viewport
- **Efficient Re-renders**: Proper dependency arrays in useEffect
- **Memory Management**: Proper cleanup of observers and intervals

## How to Use

1. **Theme Toggle**: Click the "Switch to Dark/Light Mode" button in the header
2. **Modal**: Click "Open Modal" to see the portal-based modal popup
3. **Image Slider**: Scroll down to trigger the IntersectionObserver and see the image slider
4. **Data Fetching**: The app fetches images from JSONPlaceholder API with loading states

## Technical Implementation

- **React 18** with modern hooks
- **Portal API** for modal rendering
- **IntersectionObserver API** for scroll-based loading
- **Custom Hooks** for reusable logic
- **Context API** for state management
- **CSS Modules** for component styling
- **Responsive Design** with modern CSS

