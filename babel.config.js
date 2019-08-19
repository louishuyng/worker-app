module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
        alias: {
          'api/*': ['api/*'],
          'navigation/*': ['navigation/*'],
          'screens/*': ['screens/*'],
          'components/*': ['./components/*'],
          'store/*': ['store/*'],
          'utils/*': ['utils/*'],
          'locales/*': ['locales/*'],
          'constant/*': ['constant/*'],
        },
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: false,
      },
    ],
    '@babel/proposal-object-rest-spread',
  ],
};
