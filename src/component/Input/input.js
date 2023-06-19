import React from "react";
import { Text,View,TextInput, Button ,StyleSheet} from "react-native";

const Input = ({placeholder,value,onChangeText}) => {
    return(
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} />

        </View>

    )
}
export default Input;

const styles =StyleSheet.create({
container:{
    padding:5,
    margin:7,
    backgroundColor:'#efef',
    borderRadius:5 
}

})