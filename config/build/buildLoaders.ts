import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.s[ac]ss$/i, // ✅ включать модули только для *.module.scss,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            namedExport: false, // Важно для новых версий!
          },
        },
      },
      'sass-loader',
    ],
  };

  const fileLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const imageLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  return [imageLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
