import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../detail/Details";
import Product from "../product/Product";
import Login from "../login/login";


  const Stack = createStackNavigator();
 function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
  
        <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Router;