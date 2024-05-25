import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
import responsiveUtils from "../../../utils/responsiveUtils";
export const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.PRIMARY,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: responsiveUtils.relativeHeight(5),
    },
    buttonText: {
      color: '#fff',
      fontSize: responsiveUtils.relativeFontSize(16),
    },
    disabledButton: {
      backgroundColor: colors.INACTIVE
    },
    container:{
      flexDirection:'row',
      justifyContent:'center'
    },
    loader: {
      marginRight: responsiveUtils.relativeWidth(2)
    }
  });