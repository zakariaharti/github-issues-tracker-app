const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve('.','src/main.tsx')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@components': path.resolve('.','src/app/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: path.resolve('.','tsconfig.json')
        }
      }
    ]
  },
  plugins: [
    new cleanPlugin(['dist']),
    new htmlPlugin({
      template: path.resolve('.','src/public/index.html'),
      filename: 'index.html',
      favicon: path.resolve('.','src/assets/imgs/react.ico')
    })
  ]
};
