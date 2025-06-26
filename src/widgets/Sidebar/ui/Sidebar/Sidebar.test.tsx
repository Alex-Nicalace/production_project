import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'shared/lib';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('checking render', () => {
    // отрисовка компонента в тестовой среде
    renderWithProviders(<Sidebar />);
    // получение элемента из разметки по тестовому id
    const sidebarEl = screen.getByTestId('sidebar');
    // тест проверяет наличие элемента
    expect(sidebarEl).toBeInTheDocument();
  });

  test('clicking toggle', () => {
    // отрисовка компонента в тестовой среде
    renderWithProviders(<Sidebar />);
    // получение элементов из разметки
    const sidebarEl = screen.getByTestId('sidebar');
    const toggleEl = screen.getByTestId('sidebar-toggle');
    // ожидание отсутствия класса
    expect(sidebarEl).not.toHaveClass('collapsed');
    // нажатие на кнопку
    fireEvent.click(toggleEl);
    // ожидание наличия класса
    expect(sidebarEl).toHaveClass('collapsed');
  });
});
