import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}
export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/">
          {t('Главная')}
        </AppLink>
        <AppLink to="/about">{t('О нас')}</AppLink>
      </div>
    </div>
  );
}
