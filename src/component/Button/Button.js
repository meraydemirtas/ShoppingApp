import React from "react";
import {  StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = ({ text,onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight:'bold',
    fontSize:17,
    marginLeft:150
  },
  button: {
    padding:8,margin:10,backgroundColor:"#64b5f6",
    borderRadius:5,
  },
});

export default CustomButton;
