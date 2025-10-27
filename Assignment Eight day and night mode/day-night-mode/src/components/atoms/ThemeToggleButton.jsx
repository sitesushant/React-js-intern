import { useTheme } from '../../context/ThemeContext';
import Button from './Button';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}
