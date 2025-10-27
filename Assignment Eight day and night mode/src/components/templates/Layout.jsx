import ThemeToggleButton from '../atoms/ThemeToggleButton';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>React Atomic UI</h1>
        <ThemeToggleButton />
      </header>
      <main>{children}</main>
    </div>
  );
}
