import React from "react";
import { SafeAreaView,Text,FlatList,ActivityIndicator,View,Image,StyleSheet } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import Error from "../../component/Eror/Error";
import Loading from "../../component/Loading/Loading";
const Detail = ({route}) =>{
const API_URL = "https://fakestoreapi.com/products";
const {id} = route.params;
const {loading,error,data} = useFetch(`${API_URL}/${id}`)
if (loading) {

    return <Loading></Loading>
}
if (error) {

  return <Error />
}

    return( 
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:data.image}}></Image>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>{data.price}$ </Text>
    </View>)
}
export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aqua'
    },
    image: {
        height: 165,
        width: 120,
        justifyContent: 'center',
        borderRadius: 5,
        resizeMode: 'contain',
        marginLeft:120
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 10
    },
    description: {
        fontSize: 20,
        margin: 10
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#058930',
        margin: 20
    }
})