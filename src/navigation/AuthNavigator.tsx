import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

type AuthNavigatorParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
