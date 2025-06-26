import { screen } from '@testing-library/react';
import { AppLink } from './AppLink';
import { renderWithProviders } from 'shared/lib';

describe('AppLink', () => {
  test('checking render', () => {
    // отрисовка компонента в тестовой среде
    renderWithProviders(<AppLink to="/">{`Test`}</AppLink>);
    // получение элемента из разметки
    const linkEl = screen.getByText('Test');
    // тест проверяет наличие элемента
    expect(linkEl).toBeInTheDocument();
  });
});
