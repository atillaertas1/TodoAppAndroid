import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import styles from "./Styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "./Colors";
import { useEffect } from "react";

export default function TodoModal({ list, closeModal, updateList }) {
  const [tempList, setTempList] = useState(list);
  const [name, setName] = useState(tempList.name);
  const [colorList, setColorList] = useState(tempList.color);
  const [todos, setTodos] = useState(tempList.todos);
  const [taskName, setTaskName] = useState("");
  const [taskCount,setTaskCount] = useState(tempList.todos.length);
  const [completedCount, setCompletedCount] = useState(
    list.todos.filter((todo) => todo.completed).length
  );
  const addTodo = () => {
    const name = taskName;



    if (name.trim() === "") {
      return;
    }

    const newTodo = {
      title: name,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];


    setTodos(updatedTodos);
    setTaskName("");
    setTaskCount(taskCount + 1);
  };
  
  useEffect(() => {
    onSave();
    console.log("Todos after update:", todos);
  }, [todos]);

  const toggleTodoCompleted = index => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    const newCompletedCount = updatedTodos.filter((todo) => todo.completed).length;
    setCompletedCount(newCompletedCount);
  }


  const onSave = () => {
    const updatedList = {
      name: name,
      color: colorList,
      todos: todos
    };
    //console.log(updatedList);
    console.log("------------------------------------------")
    updateList(updatedList);
  };



  const renderTodo = ({ item, index}) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={() => toggleTodoCompleted(index)}>
          <Ionicons
            name={item.completed ? "ios-square" : "ios-square-outline"}
            size={24}
            style={{ width: 32 }}
            color={colors.gray}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: item.completed ? colors.gray : colors.black,
            textDecorationLine: item.completed ? "line-through" : "none",
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{flex:1}} behavior="padding">
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{ position: "absolute", top: 64, right: 32, zIndex: 1 }} //zIndex close butonunun calismasini saglar !!
          onPress={() => {
            onSave();
            closeModal();
          }}
        >
          <Ionicons name="ios-close" size={32} color={colors.black} />
        </TouchableOpacity>
        <View
          style={[
            styles.section,
            styles.header,
            { borderBottomColor: colorList },
          ]}
        >
          <View>
            <Text style={styles.titleTodoModal}>{name}</Text>
            <Text style={styles.taskCount}>
              {completedCount} of {taskCount} tasks
            </Text>
          </View>
        </View>

        <View style={[styles.section, { flex: 3 }]}>
          <FlatList
            data={todos}
            keyExtractor={todos.title}
            renderItem={({ item, index }) => renderTodo({ item, index })} // renderItem içinde renderTodo fonksiyonunu çağırıyoruz ve item ile index'i iletiyoruz
            contentContainerStyle={{ paddingHorizontal: 64, paddingTop: 30 }}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        </View>

        <View style={[styles.section, styles.footer]} behavior="padding">
          <TextInput
            style={[styles.inputTodoModal, { borderColor: colorList }]}
            onChangeText={(text) => setTaskName(text)}
            value={taskName}
          />
          <TouchableOpacity
            style={[styles.addTodo, { backgroundColor: colorList }]}
            onPress={addTodo}
          >
            <AntDesign name="plus" size={16} color={colors.white}></AntDesign>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
