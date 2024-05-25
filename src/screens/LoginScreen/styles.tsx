import { StyleSheet } from "react-native";
import responsiveUtils from "../../utils/responsiveUtils";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    title: {
      color: colors.BLACK,
      fontSize: responsiveUtils.relativeFontSize(30),
      textAlign:'center'
    },
    subcontainer: {
      backgroundColor: colors.BACKGROUND,
      borderRadius: 50,
      paddingHorizontal: responsiveUtils.relativeWidth(5),

    },
    flexContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: responsiveUtils.relativeWidth(10),
    },
    inputContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });