import { FlatList, Text, TouchableOpacity, View, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import styles from "./Styles";
import tempData from "./tempData";
import TodoList from "./TodoList";
import { useState } from "react";
import AddListModal from './AddListModal'

export default function App() {
  const [state, setState] = useState({ addTodoVisible: false });
  const [lists, setLists] = useState(tempData)
  const toggleAddTodoModal = () => {
    setState(prevState => ({
      ...prevState,
      addTodoVisible: !prevState.addTodoVisible
    }));
  };
  const renderList = list => {
    return  <TodoList list={list} updateList={updateList} />
  }
  const addList = list => {
    setLists([...lists,{...list, todos:[]}]);
  }
  const updateList = updatedList => {
    const updatedLists = lists.map(list => {
      if (list.name === updatedList.name) {
        return { ...list, ...updatedList };
      }
      return list;
    });
    setLists(updatedLists);
  };
  

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={state.addTodoVisible} onRequestClose={() => toggleAddTodoModal()}>
          <AddListModal closeModal={() => toggleAddTodoModal()} addList={addList} lists={lists}/>
      </Modal>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider}></View>
        <Text style={styles.title}>
          Todo
          <Text style={{ fontWeight: "300", color: colors.blue }}>App</Text>
        </Text>
        <View style={styles.divider}></View>
      </View>

      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity style={styles.addList} onPress={toggleAddTodoModal}>
          <AntDesign name="plus" size={16} color={colors.blue}></AntDesign>
        </TouchableOpacity>
        <Text>Add Task</Text>
      </View>

      <View style={{ height: 350, paddingLeft: 18}}> 
        <FlatList
          data={lists}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => renderList(item)}
        />
      </View>
    </View>
  );
}
