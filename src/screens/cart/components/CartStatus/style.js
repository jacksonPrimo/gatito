const { StyleSheet } = require("react-native");
import { colors } from "../../../../../global-style";
export default StyleSheet.create({
  statusBar: {
    backgroundColor: colors.purple,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px"
  },
  info_text: {
    color: colors.light,
    fontWeight: 'bold',
  },
  info_amount: {
    color: colors.orange,
    fontWeight: 'bold',
  },
  button: {

  }
})