import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"
import responsiveUtils from "../../utils/responsiveUtils"

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.BACKGROUND,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize: responsiveUtils.relativeFontSize(20)
    },
    logo: {
        height: responsiveUtils.relativeWidth(50),
        width: responsiveUtils.relativeWidth(50),
    }
})