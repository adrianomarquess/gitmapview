import { StackNavigator } from 'react-navigation';

import Map from 'pages/Map';

const routes = StackNavigator({
  Map: { screen: Map },
}, {
  navigationOptions: {
    header: null,
  },
});

export default routes;
