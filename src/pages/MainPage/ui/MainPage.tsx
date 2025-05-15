import { useTranslation } from 'react-i18next';

// type TMainPageProps = { }
function MainPage(/*{ }: TMainPageProps*/) {
  const { t } = useTranslation('main');

  return <div>{t('Главная страница')}</div>;
}

export default MainPage;
