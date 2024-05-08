import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Constants";

export const styles = StyleSheet.create({
    checkbox: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLORS.LIGHT_GREY,
        alignItems: "center",
        justifyContent: "center",
      },
      checkboxInner: {
        height: 8,
        width: 8,
        borderRadius: 6,
        backgroundColor: COLORS.BLACK,
      },
});
