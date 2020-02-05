// Navigation imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

// Page imports for routing
import Main from './pages/Main';
import Profile from './pages/Profile';

// The app's screens
const Routes = createAppContainer(
    createStackNavigator({
        // The main screen with map
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            },
        },
        // The dev's github profile screen (in-app browser)
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            },
        },
    }, {
        // Screen's configs
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#7d40e7'
            },
        },
    })
);

export default Routes;