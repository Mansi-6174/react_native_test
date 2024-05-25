import { TouchableOpacity, Text, TouchableOpacityProps, ActivityIndicator, View, StyleProp, ViewProps } from 'react-native';
import { styles } from './styles';
import { colors } from '../../../utils/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  style?: StyleProp<ViewProps>;
  buttonLabelColor?: string;
}

const Button: React.FC<ButtonProps> = ({ title, loading=false, style, buttonLabelColor, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button, style, loading && styles.disabledButton]} disabled={loading} {...props}>
       <View style={styles.container}>
        {loading && <ActivityIndicator
            style={styles.loader}
            size="small"
            color={colors.PRIMARY}
          />}
        <Text style={[styles.buttonText, {color: buttonLabelColor}]}>{title}</Text>
       </View>
    </TouchableOpacity>
  );
};

export default Button;
