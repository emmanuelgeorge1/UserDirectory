import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.BLACK,
  },
});
