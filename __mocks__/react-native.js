const ReactNative = jest.requireActual('react-native');

ReactNative.NativeAnimatedHelper = {
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};

module.exports = ReactNative;
