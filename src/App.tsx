import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router';
import './index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

// type TAppProps = { }
function App(/*{ }: TAppProps*/) {
  return (
    <div className="app">
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
