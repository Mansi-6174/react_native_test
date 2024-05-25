import { StyleSheet } from "react-native";
import responsiveUtils from "./responsiveUtils";
import { colors } from "./colors";

export const commonStyles = StyleSheet.create({
    flex: {
        flex:1
    },
    errorText: {
        marginVertical: responsiveUtils.relativeHeight(1),
        fontSize: responsiveUtils.relativeFontSize(12),
        color: colors.ERROR,
        textAlign: 'center'
    }
})