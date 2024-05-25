import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import useLoginScreenHook from './useLoginScreenHook';
import { commonStyles } from '../../utils/commonStyles';
import { colors } from '../../utils/colors';

type LoginScreenProps = {
  navigation: any;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

  const { onLogin, loading, error, loginData, onChangeText } = useLoginScreenHook();

  return (
    <SafeAreaView style={commonStyles.flex}>
      <KeyboardAvoidingView
        accessibilityLabel={'EmailLoginScreen'}
        testID={'EmailLoginScreen'}
        style={commonStyles.flex}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      >
        <View style={styles.flexContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Login</Text>
            <Input
              placeholder={'Your Email'}
              value={loginData.email}
              onChangeText={(text: string) => onChangeText(text, 'email')}
            />
            <Input
              placeholder={'Your Password'}
              secureTextEntry={true}
              value={loginData.password}
              onChangeText={(text: string) => onChangeText(text, 'password')}
            />
            <Text style={commonStyles.errorText}>{error}</Text>
          </View>
          <Button
            title={'Login'}
            onPress={onLogin}
            loading={loading} 
            buttonLabelColor={colors.WHITE}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default LoginScreen;
