import { CommonActions, useNavigation } from '@react-navigation/native';

const useResetStack = () => {
    const navigation = useNavigation();

    const resetStack = (route: string) => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: route }],
            }),
        );
    }


    return resetStack
};

export default useResetStack;
