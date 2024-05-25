import { Text, SafeAreaView, View } from 'react-native';
import { commonStyles } from '../../utils/commonStyles';
import { styles } from './styles';
import Button from '../../components/ui/Button';
import useHomeScreenHook from './useHomeScreenHook';
import { colors } from '../../utils/colors';

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const { onLogout, loading, error} = useHomeScreenHook();

  return (
    <SafeAreaView style={commonStyles.flex}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome Home </Text>
        <Text style={commonStyles.errorText}>{error}</Text>
        <Button
          title='Logout'
          loading={loading}
          onPress={onLogout} 
          buttonLabelColor={colors.WHITE}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
