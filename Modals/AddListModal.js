import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ToastAndroid
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./Styles";
import colors from "./Colors";

export default AddListModal = ({ closeModal, addList, lists}) => {
  backgroundColor = [
    "#5CD859",
    "#24A6D9",
    "#595BD9",
    "#8022D9",
    "#D159D8",
    "#D85963",
    "#D88559",
  ];
  const [text, setText] = useState("");
  const [bg, setBg] = useState(backgroundColor[0]);

  const handleColorChange = (color) => {
    setBg(color);
  };

  const showToast = () => {
    ToastAndroid.show('A list with the same name already exists!', ToastAndroid.SHORT);
  };

  const createTask = () => {
    const name = text;
    const color = bg;

    const existingList = lists.find((list) => list.name === name);

    if (existingList) {
      showToast();
      return;
    }


    const list = {name, color};

    addList(list);

    setText("");
    closeModal();
  };

  const selectColor = () => {
    return backgroundColor.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[
            styles.selectColor,
            {
              backgroundColor: color,
              marginTop: 20,
            },
          ]}
          onPress={() => handleColorChange(color)}
        ></TouchableOpacity>
      );
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        style={{ position: "absolute", top: 64, right: 32 }}
        onPress={closeModal}
      >
        <AntDesign name="close" size={24} color={colors.black}></AntDesign>
      </TouchableOpacity>
      <View style={{ alignSelf: "stretch", marginHorizontal: 40 }}>
        <Text style={styles.addListTitle}>Create a Todo List</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
        ></TextInput>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {selectColor()}
        </View>
        <TouchableOpacity style={[styles.create, { backgroundColor: bg }]} onPress={createTask}>
          <Text style={{ color: colors.white, fontWeight: "600" }}>Create</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
