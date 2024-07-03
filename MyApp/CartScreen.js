import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function CartScreen() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                let cartItems = await AsyncStorage.getItem('cart');
                setCart(cartItems ? JSON.parse(cartItems) : []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCart();
    }, []);

    const removeFromCart = async (item) => {
        try {
            let updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
            setCart(updatedCart);
            await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
            alert('Item removed from cart');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ScrollView>
        <View style={styles.cont}>
        <View style={styles.header}>
           <Text style={{fontSize:30,fontWeight:'500', left:140, top:4}}>
            Open</Text>
            <Text style={{fontSize:30, fontWeight:'500', bottom:12, left:118}} >Fashion</Text>

            
        </View>
        <Icon style={styles.seacrhIcon} name="search" size={30} color="black"  />

        <Text style={{fontSize:30, bottom:20, left: 65, letterSpacing: 15}}>CHECKOUT</Text>

        {cart.map(item => (
                    <View key={item.id} style={styles.cartItem}>
                        <Image style={styles.itemImage} source={item.image} />
                        <View>
                            <Text style={{ fontSize: 30, letterSpacing: 3, fontWeight: '500', left: 10, top: 65, textTransform:'uppercase'}}>{item.name}</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500', top: 68, left: 10, textTransform:'capitalize' }}>
                                {item.description}
                            </Text>
                            <Text style={{ fontSize: 35, color: 'orange', fontWeight: '500', top: 68, left: 10 }}>${item.price}</Text>
                            <TouchableOpacity onPress={() => removeFromCart(item)}>
                                <View style={styles.circle}>
                                    <Icon style={{ bottom: 0, left: 4 }} name="times" size={25} color="red" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
        <View style={styles.footer}>
            <Text style={{fontSize: 25, bottom: 40, right: 30}}>EST. TOTAL</Text>
            <Text style={{fontSize: 25, bottom: 40, right: 10, left:180}}>$240</Text>
            <Icon style={{marginRight:20, right:60 }} name="shopping-bag" size={20} color="black"  />
            <Text style={{fontSize:25, right: 65}}>CHECKOUT</Text>
        </View>

        </View>
        </ScrollView>
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
    cartItem: {
        flexDirection: 'row',
        height: 240,
        padding: 10,
    },
    itemImage: {
        width: 150,
        height: 200,
    },
    circle: {
        height: 30,
        width: 30,
        borderRadius: 50,
        top: 70,
        left: 162,
        borderWidth: 1,
        borderColor: 'red',
    },
    footer: {
        flexDirection: 'row',
        marginTop: 250,
        height: 50,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
});