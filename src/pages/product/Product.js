import React,{useState,useEffect} from "react";
import axios from 'axios'
import { SafeAreaView,Text,FlatList,ActivityIndicator } from "react-native";
import ProductCard from "../../component/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Detail from "../detail/Details";
import Error from "../../component/Eror/Error"
import Loading from "../../component/Loading/Loading"


const Product = ({navigation}) => {

  const API_URL = "https://fakestoreapi.com/products";
    const {loading,error,data} =useFetch(API_URL);

const onclick = (id) => { 
    navigation.navigate("Detail",{id});
    console.log(id);
  };

  const renderFunction = ({item}) => 
  <ProductCard asdas={item} onclick={() =>onclick(item.id)}></ProductCard>

  if (loading) {

    return <Loading></Loading>
}
if (error) {

  return <Error />
}
    
  return(
 
            <FlatList data={data} renderItem={renderFunction}></FlatList>
      
    )
}
export default Product;