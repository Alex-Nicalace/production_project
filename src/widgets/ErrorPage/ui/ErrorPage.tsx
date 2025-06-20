import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}
export default function ErrorPage({ className }: ErrorPageProps) {
  const { t } = useTranslation();

  function handleReloadPage() {
    location.reload();
  }

  return (
    <div className={classNames(cls.errorPage, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={handleReloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
}
