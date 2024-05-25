import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

type NonAuthNavigatorParamList = {
  Login: undefined;
};

const Stack = createNativeStackNavigator<NonAuthNavigatorParamList>();

const NonAuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default NonAuthNavigator;
