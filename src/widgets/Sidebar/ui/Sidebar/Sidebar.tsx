import { useState } from 'react';

import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { classNames } from 'shared/lib';
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
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.menu}>
        <button onClick={toggleCollapsed}>toggle</button>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
