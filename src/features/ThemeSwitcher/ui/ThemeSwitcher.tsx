import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Theme, useTheme } from 'shared/context/theme';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps extends React.HTMLAttributes<HTMLButtonElement> {}
export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={() => toggleTheme()}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
}
