import { Text, View, Image } from 'react-native'
import { styles } from './styles';
import { IMAGES } from '../../assets/images';
import useSplaseScreen from './useSplashScreen';

const SplashScreen = () => {
  useSplaseScreen();
  return (
    <View style={styles.container}>
       <Image
          style={styles.logo}
          source={IMAGES.LOGO}
        />
        <Text style={styles.title}>Photo Gallery</Text>
    </View>
  )
}

export default SplashScreen

