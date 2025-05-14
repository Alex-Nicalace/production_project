import { AppRouter } from 'app/routes';
import { useTheme } from 'shared/context/theme';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="app__content">
        <Sidebar />
        <AppRouter className="app__wrapper" />
      </div>
    </div>
  );
}

export default App;
