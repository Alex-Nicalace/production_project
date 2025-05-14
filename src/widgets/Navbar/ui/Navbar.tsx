import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/">
          Главная
        </AppLink>
        <AppLink to={'/about'}>О нас</AppLink>
      </div>
    </div>
  );
}
