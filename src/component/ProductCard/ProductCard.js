import React from "react";
import { View,Text,Image,StyleSheet,TouchableWithoutFeedback } from "react-native";
const ProductCard = ({asdas,onclick}) => {
    return(
<TouchableWithoutFeedback onPress={onclick}>
    <View style={styles.container}>
            <Image 
            style={styles.image}
            source={{uri:asdas.image}}
            />
            <View style={styles}>
                <Text style={styles.title}>{asdas.title}</Text>
                <Text style={styles.price}>{asdas.price}$</Text>
            </View>
    </View>
</TouchableWithoutFeedback>     
    )
}

styles =StyleSheet.create({
    container: {
        flex: 1,
        height: 175,
        margin: 4,
        padding: 6,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'aqua',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 165,
        width: 120,
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: 3,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 15,
        width:250,
        marginLeft:6,
        fontWeight: 'bold',
        color: 'white'
    },
    price: {
        fontSize: 16,
        marginLeft:3,
        fontWeight: 'bold',
        color: 'green'
    }

})
export default ProductCard;