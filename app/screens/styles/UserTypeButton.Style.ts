import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Constants";

export const styles = StyleSheet.create({
    userType: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
      borderRadius: 10,
      paddingVertical: 14,
    },
    userTypeSelected: {
      backgroundColor: COLORS.LIGHT_BLUE,
    },
    checkboxContainer: {
      marginLeft: 7,
    },
    userTypeText: {
      color: COLORS.BLACK,
      fontSize: 20,
      paddingLeft: 10,
    }
  });