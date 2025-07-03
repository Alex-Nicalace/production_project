import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
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
}
