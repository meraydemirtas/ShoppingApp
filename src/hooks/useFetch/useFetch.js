import React,{useEffect,useState} from "react";
import axios from "axios";


function useFetch(url){
    const [loading,SetLoading] = useState(false);
    const[data,setData] = useState([]);
    const [error,setError] = useState('');

    const fetchData =
    async () =>{
        try {
        const {data:responseData} =  await axios.get(url);
        setData(responseData);
        SetLoading(false);
} catch (errorr) {
    SetLoading(false);
    setError(errorr.message);
    console.log(errorr.message);
} 
  }
  useEffect(() =>{
 fetchData();
  },[]);
  return {error,loading,data}
}
export default useFetch;