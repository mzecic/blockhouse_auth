import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

global.setImmediate = callback => setTimeout(callback, 0);
global.clearImmediate = id => clearTimeout(id);
