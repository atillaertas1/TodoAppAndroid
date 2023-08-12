import { StyleSheet } from "react-native";
import colors from "./Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    padding: 16,
    borderRadius: 4,
    borderColor: colors.blue,
    alignItems: "center",
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderRadius: 6,
    marginHorizontal: 20,
    alignItems: "center",
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.white,
    marginBottom: 20,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
  },
  state: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.white,
  },
  addListTitle: {
    fontSize: 32,
    fontWeight: "800",
    alignSelf: "center",
    color: colors.black,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth, //ince çizgiler için
    borderColor: colors.blue,
    borderRadius: 8,
    height: 50,
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  create: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    marginTop: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  selectColor: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    borderBottomWidth: 5,
    justifyContent: "flex-end",
    marginLeft: 64,
  },
  taskCount: {
    fontSize:15,
    color:colors.gray
  },
  titleTodoModal: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
  },
  footer:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:32,
    justifyContent:'center'
  },
  inputTodoModal: {
    flex:1,
    height:50,
    borderWidth:StyleSheet.hairlineWidth,
    borderRadius:8,
    paddingHorizontal: 8,
    marginRight: 8
  },
  addTodo: {
    borderWidth: StyleSheet.hairlineWidth,
    padding:15,
    alignItems:'center',
    justifyContent:'center',
  },
  todoContainer:{
    paddingVertical:16,
    flexDirection:'row'
  }
});
export default styles;
