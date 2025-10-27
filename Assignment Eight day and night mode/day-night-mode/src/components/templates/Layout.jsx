import ThemeToggleButton from '../atoms/ThemeToggleButton';

export default function Layout({ children }) {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <header>
        <ThemeToggleButton />
      </header>
      <main>{children}</main>
    </div>
  );
}
