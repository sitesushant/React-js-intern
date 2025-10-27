import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/templates/Layout';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
