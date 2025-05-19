import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';

interface LangSwitcherProps {
  className?: string;
}
export function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();
  function handleToggleLanguage() {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }
  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={handleToggleLanguage}
    >
      {t('Язык')}
    </Button>
  );
}
