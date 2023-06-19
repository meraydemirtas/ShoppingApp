import React from "react";
import {SafeAreaView,Text,View,StyleSheet,Image } from 'react-native'
import Input from "../../component/Input/input";
import CustomButton from "../../component/Button/Button";
import { Formik } from "formik";

const Login = () => {
    function handleLogin(values){
        console.log(values);
    }
    return(
    <SafeAreaView style={styles.container}>
      <Formik initialValues={{username:'',password:''}} onSubmit={handleLogin}>
        {({handleSubmit,handleChange,values}) => (<View style={styles.body_container}>
            <Input placeholder="Kullanıcı Adı" value={values.username} onChangeText={handleChange('username')}></Input>
            
            <Input placeholder="Şifre" value={values.password} onChangeText={handleChange('password')}></Input>
            <CustomButton text="Giriş Yap" onPress={handleSubmit}> </CustomButton>
            
        </View>)}   
        </Formik>
    </SafeAreaView>
);
}
export default Login;

const styles = StyleSheet.create({
container:{
    marginTop:30

},
logo_container:{

},
body_container:{

}

});