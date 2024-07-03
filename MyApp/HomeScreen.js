import React from "react";
import {useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import { Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen() {
    const navigation = useNavigation();
    const [isListVisible, setIsListVisible] = useState(false);

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    const addToCart = async (item) => {
        try {
            let cart = await AsyncStorage.getItem('cart');
            cart = cart ? JSON.parse(cart) : [];
            cart.push(item);
            await AsyncStorage.setItem('cart', JSON.stringify(cart));
            alert('Item added to cart');
        } catch (error) {
            console.error(error);
        }
    };

    const sampleItems = [
        {
            id: 1,
            name: 'Office Wear',
            description: 'Office Wear for your office',
            price: 120,
            image: require('./assets/dress1.png'),
        },
        {
            id: 2,
            name: 'Black',
            description: 'reversible angora cardigan',
            price: 120,
            image: require('./assets/dress2.png'),
        },
        {
            id: 3,
            name: 'Church Wear',
            description: 'recycle boucle knit cardigan pink',
            price: 120,
            image: require('./assets/dress3.png'),
        },
        {
            id: 4,
            name: 'Lamerei',
            description: 'recycle boucle knit cardigan pink',
            price: 120,
            image: require('./assets/dress4.png'),
        },
        {
            id: 5,
            name: '21WN',
            description: 'reversible angora cardigan',
            price: 120,
            image: require('./assets/dress5.png'),
        },
        {
            id: 6,
            name: 'Lopo',
            description: 'reversible angora cardigan',
            price: 120,
            image: require('./assets/dress6.png'),
        },
        {
            id: 7,
            name: '21WN',
            description: 'reversible angora cardigan',
            price: 120,
            image: require('./assets/dress7.png'),
        },
        {
            id: 8,
            name: 'Lame',
            description: 'reversible angora cardigan',
            price: 120,
            image: require('./assets/dress3.png'),
        },
    ];
    
    return (
       
<ScrollView>
<View style={styles.header}>
        <View>
            <Image style={styles.MenuImg} source={require('./assets/Menu.png') } />
        </View>

        <View style={styles.textCon}>
        <Text style={{fontSize:30,fontWeight:'500', left:27, top:4}}>
            Open </Text>
        <Text style={{fontSize:30, fontWeight:'500', bottom:12, left:6}}>
             Fashion </Text>
        </View>
       <View style={styles.rightHead}>
            <Icon style={styles.seacrhIcon} name="search" size={30} color="black"  />
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon style={styles.shoppingIcon} name="shopping-bag" size={30} color="black"  />
            </TouchableOpacity>
       </View>
</View>

<View style={styles.HomeHead}>
    <Text style={{fontSize:30, letterSpacing: 8}}> OUR STORY</Text>
    <TouchableOpacity onPress={toggleListVisibility}>
    <View style={styles.ListViewCon}>
    <Icon style={{ top:8, opacity:0.7}} name="list" size={25} color="black"  />
    </View>
    </TouchableOpacity>
    
    <View style={styles.filterCon}>
        <Icon style={{top:8}} name="filter" size={25} color="orange"  />
    </View>
</View>
{!isListVisible && (<View style={styles.itemsContainer}>
                {sampleItems.map(item => (
                    <View key={item.id} style={styles.item}>
                        <Image style={{ height: 230, width: 170, marginTop:30, }} source={item.image} />
                        <TouchableOpacity onPress={() => addToCart(item)}>
                            <View style={styles.circle}>
                                <Icon style={{ left: 6 }} name="plus" size={20} color="black" />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 0, bottom:25 }}>{item.name}</Text>
                        <Text style={{ fontSize: 15, bottom:25 }}>reversible angora cardigan</Text>
                        <Text style={{ fontSize: 30, color: 'orange', bottom:25 }}>${item.price}</Text>
                    </View> 
                ))}
            </View>
            )}
</ScrollView>
        
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        bottom: -40,
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 15,
        bottom: -40,
    },
    item: {
        marginTop: -20,
        
    },
    MenuImg: {
        width: 30,
        height: 40,
        
    },
    rightHead: {
        flexDirection: 'row',
        marginLeft: 50,
        justifyContent: 'space-between',
    },
    seacrhIcon: {
        marginRight: 20,
    },
    textCon: {
        flexDirection: 'column',
        marginLeft: 40,
        alignContent: 'center',
        justifyContent: 'center',
    },
    HomeHead: {
        flexDirection: 'row',
        top: 60,
        height: 60,
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    ListViewCon: {
        flexDirection: 'row',
        marginLeft: 80,
        backgroundColor: 'lightgrey',
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
    },
    filterCon: {
        flexDirection: 'row',
        marginRight: 15,
        backgroundColor: 'lightgrey',
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
    },

    
    circle: {
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        borderWidth: 1,
        left: 138,
        bottom: 35
    },
  
    ListCon: {
        backgroundColor: 'lightgrey',
        height: 75,
        width: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        top: 0,
        left: -110,
        zIndex: 1,
    },

});