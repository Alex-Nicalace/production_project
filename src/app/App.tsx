import { Link } from 'react-router';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/routes';
import { classNames } from 'shared/lib';
import './styles/index.scss';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={() => toggleTheme()}>Toggle theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <AppRouter />
    </div>
  );
}

export default App;
