import { useTranslation } from 'react-i18next';

// type TAboutPageProps = { }
function AboutPage(/*{ }: TAboutPageProps*/) {
  const { t } = useTranslation('about');

  return <div>{t('О сайте')}</div>;
}

export default AboutPage;
