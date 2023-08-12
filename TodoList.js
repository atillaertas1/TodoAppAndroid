import { View, Text, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import styles from "./Styles";
import { Modal } from "react-native";
import TodoModal from "./TodoModal";
import { AntDesign } from "@expo/vector-icons";

export default TodoList = ({ list, updateList }) => {
  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remainingCount = list.todos.length - completedCount;
  const [showListVisible, setShowListVisible] = useState(false);

  const toggleListModal = () => {
    setShowListVisible(!showListVisible);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        visible={showListVisible}
        onRequestClose={toggleListModal}
      >
        <TodoModal
          list={list}
          closeModal={() => toggleListModal()}
          updateList={updateList}
        />
      </Modal>

      <TouchableOpacity
        style={[styles.listContainer, { backgroundColor: list.color }]}
        onPress={toggleListModal}
      >
        <Text style={styles.listTitle}>{list.name}</Text>
        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{remainingCount}</Text>
            <Text style={styles.state}>Remaining</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{completedCount}</Text>
            <Text style={styles.state}>Completed</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: 8,
            }}
          ></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
