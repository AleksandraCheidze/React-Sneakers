const path = require('path');

module.exports = {
  entry: './src/index.js',  // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Имя выходного файла
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Добавляем поддержку .jsx файлов
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Применяем Babel к .js и .jsx файлам
        exclude: /node_modules/,  // Исключаем node_modules
        use: {
          loader: 'babel-loader',  // Используем babel-loader
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Пресеты для JS и JSX
          },
        },
      },
      {
        test: /\.scss$/,  // Обработка SCSS файлов
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,  // Обработка CSS файлов
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',  // Для отладки
};
