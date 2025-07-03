import { Configuration, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }): Configuration => {
  const srcPath = path.resolve(__dirname, '..', '..', 'src');
  config.resolve.modules.push(srcPath);
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push(buildCssLoader(true));

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (
      rule &&
      rule.test &&
      rule.test instanceof RegExp &&
      rule.test.test('file.svg')
    ) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  // ✅ Добавляем SVGR loader для импорта SVG как React-компонентов
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};
