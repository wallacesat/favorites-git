import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
    },
    {
      initialRouteName: 'Welcome',
    },
  ),
);

export default Routes;
