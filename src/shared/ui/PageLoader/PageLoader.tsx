import { classNames } from 'shared/lib';
import { Loader } from '../Loader';

import cls from './PageLoader.module.scss';

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
