import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('name-class')).toBe('name-class');
  });

  test('with additional class', () => {
    expect(classNames('name-class', {}, ['class1', 'class2'])).toBe(
      'name-class class1 class2'
    );
  });

  test('with mods', () => {
    expect(
      classNames(
        'name-class',
        {
          hovered: true,
          scrollable: false,
          red: undefined,
          green: null,
          blue: 'something',
        },
        ['class1', 'class2']
      )
    ).toBe('name-class class1 class2 hovered blue');
  });
});
