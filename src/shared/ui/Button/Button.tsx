import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}
export function Button({ className, children, theme, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(cls.button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
}
