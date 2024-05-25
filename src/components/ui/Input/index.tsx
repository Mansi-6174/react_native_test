import { View, TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { colors } from '../../../utils/colors';

interface InputProps extends TextInputProps {
  placeholder: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, error, ...props }) => {
  return (
    <View style={styles.container}>
      {/* ICON */}
      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.PLACEHOLDER_COLOR} {...props} />
      {/* error ICON */}
      {/* Erorr Text  */}
    </View>
  );
};



export default Input;
