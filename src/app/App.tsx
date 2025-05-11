import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/routes';
import { useTheme } from 'shared/context/theme';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={() => toggleTheme()}>Toggle theme</button>
    </div>
  );
}

export default App;
