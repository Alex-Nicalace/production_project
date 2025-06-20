import { Loader } from 'shared/ui';
import cls from './PageLoader.module.scss';
import { classNames } from 'shared/lib';

interface PageLoaderProps {
  className?: string;
}
export function PageLoader({ className }: PageLoaderProps) {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
}
