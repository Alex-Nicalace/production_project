import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export default function NotFoundPage({ className }: NotFoundPageProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
}
