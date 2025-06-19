import { classNames } from 'shared/lib';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}
export function Loader({ className }: LoaderProps) {
  return (
    <div className={classNames(cls.loader, {}, [className])}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} />
      ))}
    </div>
  );
}
