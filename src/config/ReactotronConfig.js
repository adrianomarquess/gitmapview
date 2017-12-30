import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
// import { NativeModules } from 'react-native';

if (__DEV__) {
  // const scriptURL = NativeModules.SourceCode.scriptURL;
  // let scriptHostname = scriptURL.split('://')[1].split(':')[0];

  const tron = Reactotron
    // .configure({ host: scriptHostname })
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
