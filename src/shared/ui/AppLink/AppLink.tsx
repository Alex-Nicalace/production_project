import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface TAppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
}
export function AppLink({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...props
}: TAppLinkProps) {
  return (
    <Link
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...props}
    >
      {children}
    </Link>
  );
}
