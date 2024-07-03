import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



export default function CartScreen() {
    return (
        <View style={styles.cont}>
        <View style={styles.header}>
           <Text style={{fontSize:30,fontWeight:'500', left:140, top:4}}>
            Open</Text>
            <Text style={{fontSize:30, fontWeight:'500', bottom:12, left:118}} >Fashion</Text>

            
        </View>
        <Icon style={styles.seacrhIcon} name="search" size={30} color="black"  />

        <View style={styles.Cart1} >
            <View></View>
            <View></View>
            
        </View>

        <View style={styles.Cart2}>
            <Text>Cart Screen</Text>
        </View>

        <View style={styles.Cart3}>
            <Text>Cart Screen</Text>
        </View>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        padding: 10,
    },
    seacrhIcon: {
        marginRight: 20,
        bottom: 45,
        left: 345
    },
    Cart1: {
        backgroundColor: 'red',
        height: 320,
        padding: 10,
    },
});