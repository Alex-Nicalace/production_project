export function classNames(
  cls: string,
  mods: Record<string, unknown> = {},
  additional: string[] = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).reduce((acc, [className, value]) => {
      if (Boolean(value)) {
        acc.push(className);
      }
      return acc;
    }, []),
  ].join(' ');
}
