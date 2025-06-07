module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    Plugins: [
      'expo-router/babel',
      'react-native-reanimated/plugin', // Ensure this is at the end of the plugins array
    ],
  };
};
