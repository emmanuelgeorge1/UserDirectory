import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.WHITE,
      padding: 16,
    },
    header: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 16,
    },
    separator: {
      paddingTop: 16,
      marginVertical: 8,
      borderBottomColor: COLORS.DARK_GREY,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    listContainer: {
      flex: 0,
    },
    listItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    iconContainer: {
      width: 50,
      height: 50,
      backgroundColor: COLORS.LIGHT_BLUE,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    iconText: {
      color: COLORS.DARK_BLUE,
      fontWeight: "bold",
      fontSize: 16,
    },
    listItemTextContainer: {
      alignItems: "flex-start",
      marginLeft: 16,
    },
    listItemName: {
      color: COLORS.BLACK,
      fontSize: 20,
      paddingRight: 10,
    },
    listItemType: {
      color: COLORS.DARK_GREY,
      paddingTop: 4,
    },
    searchBox: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 10,
      marginBottom: 10,
    },
  });