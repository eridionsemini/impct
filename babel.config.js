module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          __root: './',
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          hoc: './src/hoc',
          hooks: './src/hooks',
          ctx: './src/ctx',
          models: './src/models',
          navigation: './src/navigation',
          screens: './src/screens',
          store: './src/store',
          styles: './src/styles',
          types: './src/types',
          utils: './src/utils',
          lists: './src/lists',
        },
      },
    ],
    [
      'transform-inline-environment-variables',
      {
        include: ['NODE_ENV'],
      },
    ],
    ['@babel/plugin-proposal-decorators', {version: '2023-11'}],
    'react-native-reanimated/plugin',
  ],
};
