import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui';

describe('Button', () => {
  test('checking render', () => {
    // отрисовка компонента Button в тестовой среде
    render(<Button>Test</Button>);
    // получение элемента из разметки
    const button = screen.getByText('Test');
    // тест проверяет наличие элемента
    expect(button).toBeInTheDocument();
  });

  test('checking theme', () => {
    // отрисовка компонента Button в тестовой среде
    render(<Button theme={ButtonTheme.CLEAR}>{`Test`}</Button>);
    // получение элемента из разметки
    const button = screen.getByText('Test');
    // тест проверяет наличие класса у элемента
    expect(button).toHaveClass('clear');
    // вывод текущей DOM-структуры в консоль
    screen.debug();
  });
});
