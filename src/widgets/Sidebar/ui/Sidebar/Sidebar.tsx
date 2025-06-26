import { useState } from 'react';

import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import cls from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};
export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  function toggleCollapsed() {
    setCollapsed((prev) => !prev);
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.menu}>
        <Button data-testid="sidebar-toggle" onClick={toggleCollapsed}>
          toggle
        </Button>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}
