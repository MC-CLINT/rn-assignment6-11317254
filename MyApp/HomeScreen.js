import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from "react-native";


export default function HomeScreen() {
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
            <Icon style={styles.shoppingIcon} name="shopping-bag" size={30} color="black"  />
       </View>
</View>

<View style={styles.HomeHead}>
    <Text style={{fontSize:30, letterSpacing: 8}}> OUR STORY</Text>
    <View style={styles.ListViewCon}>
    <Icon style={{ top:8, opacity:0.7}} name="list" size={25} color="black"  />
    </View>
    <View style={styles.filterCon}>
        <Icon style={{top:8}} name="filter" size={25} color="orange"  />
    </View>
</View>

<View style={styles.View1}>
    <View>
      <Image style={{height: 200, width: 150, top: 20, left: 20}} source={require('./assets/dress1.png') } />
      <View style={styles.circle}>
        <Icon style={{ left: 6}} name="plus" size={20} color="black"  />
        </View>
      <Text style={{fontSize:20, fontWeight:'500', top:-10, left:15}}> Office Wear</Text>
      <Text style={{fontSize:15, left:18, top: -12}}>reversible angora cardigan</Text>
      <Text style={{fontSize: 30, color:'orange', left:20, top: -10}}>$120</Text>
    </View>
    <View>
        <Image style={{height: 200, width: 150, top: 20, right: 20}} source={require('./assets/dress2.png') } />
        <View style={styles.circle2}>
        <Icon style={{ left: 6}} name="plus" size={20} color="black"  />
        </View>
        <Text style={{fontSize:20, fontWeight:'500', top:-10, left:-23}}> Black</Text>
      <Text style={{fontSize:15, left:-20, top: -12}}>reversible angora cardigan</Text>
      <Text style={{fontSize: 30, color:'orange', left:-20, top: -10}}>$120</Text>
    </View>
</View>

<View style={styles.View2}>
    <View>
        <Image style={{height: 200, width: 150, top: 20, left: 20}} source={require('./assets/dress3.png') } />
        <View style={styles.circle}>
        <Icon style={{ left: 6}} name="plus" size={20} color="black"  />
        </View>
        <Text style={{fontSize:20, fontWeight:'500', top:-10, left:15}}> Church Wear</Text>
      <Text style={{fontSize:15, left:18, top: -12}}>reversible angora cardigan</Text>
      <Text style={{fontSize: 30, color:'orange', left:20, top: -10}}>$120</Text>
    </View>
    <View>
        <Image style={{height: 200, width: 150, top: 20, right: 20}} source={require('./assets/dress4.png') } />

        <View style={styles.circle2}>
        <Icon style={{ left: 6}} name="plus" size={20} color="black"  />
        </View>
        <Text style={{fontSize:20, fontWeight:'500', top:-10, left:-23}}> Lamerei</Text>
      <Text style={{fontSize:15, left:-20, top: -12}}>reversible angora cardigan</Text>
      <Text style={{fontSize: 30, color:'orange', left:-20, top: -10}}>$120</Text>
    </View>
</View>

<View style={styles.View3}>
    <View>
        <Image style={{height: 200, width: 150, top: 20, left: 20}} source={require('./assets/dress5.png') } />
        <View style={styles.circle}>
        <Icon style={{ left: 6}} name="plus" size={20} color="black"  />
        </View>
        <Text style={{fontSize:20, fontWeight:'500', top:-10, left:15}}> 21WN</Text>
      <Text style={{fontSize:15, left:18, top: -12}}>reversible angora cardigan</Text>
      <Text style={{fontSize: 30, color:'orange', left:20, top: -10}}>$120</Text>
    </View>
    <View>
        <Image style={{height: 200, width: 150, top: 20, right: 20}} source={require('./assets/dress6.png') } />
        <View style={styles.circle2}>
        <Icon style={{ left: 6}} name="plus" size={20} color="black"  />
        </View>
        <Text style={{fontSize:20, fontWeight:'500', top:-10, left:-23}}> Lopo</Text>
      <Text style={{fontSize:15, left:-20, top: -12}}>reversible angora cardigan</Text>
      <Text style={{fontSize: 30, color:'orange', left:-20, top: -10}}>$120</Text>
    </View>

</View>

<View style={styles.View4}>
    <View>
        <Image style={{height: 200, width: 150, top: 20, left: 20}} source={require('./assets/dress7.png') } />
        <View style={styles.circle}>
        <Icon style={{ left: 6}} name="plus" size={20} color="black"  />
        </View>
        
        <Text style={{fontSize:20, fontWeight:'500', top:-10, left:15}}> 21WN</Text>
      <Text style={{fontSize:15, left:18, top: -12}}>reversible angora cardigan</Text>
      <Text style={{fontSize: 30, color:'orange', left:20, top: -10}}>$120</Text>
    </View>

    <View>
        <Image style={{height: 200, width: 150, top: 20, right: 20}} source={require('./assets/dress3.png') } />
        <View style={styles.circle2}>
        <Icon style={{ left: 6}} name="plus" size={20} color="black"  />
        </View>
        <Text style={{fontSize:20, fontWeight:'500', top:-10, left:-23}}> Lame</Text>
      <Text style={{fontSize:15, left:-20, top: -12}}>reversible angora cardigan</Text>
      <Text style={{fontSize: 30, color:'orange', left:-20, top: -10}}>$120</Text>
        </View>
</View>
<View style={styles.View5}>
    <Text style={{fontSize: 30, color:'orange', left: 20, top: 20}}>View All</Text>
</View>
</ScrollView>
        
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'pink',
        padding: 20,
        bottom: -40,
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
        top: 50,
        height: 60,
        backgroundColor: 'yellow',
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
    View1: {
        flexDirection: 'row',
        top: 60,
        height: 310,
        backgroundColor: 'blue',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    View2: {
        flexDirection: 'row',
        top: 65,
        height: 300,
        backgroundColor: 'green',
        justifyContent: 'space-between',
    },
    View3: {
        flexDirection: 'row',
        top: 70,
        height: 300,
        backgroundColor: 'red',
        justifyContent: 'space-between',
    },
    View4: {
        flexDirection: 'row',
        top: 75,
        height: 320,
        marginBottom:10,
        backgroundColor: 'purple',
        justifyContent: 'space-between',
    },
    View5: {
        flexDirection: 'row',
        top: 160,
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        borderWidth: 1,
        left: 138,
        bottom: 20
    },
    circle2: {
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        borderWidth: 1,
        left: 95,
        bottom: 20
    }
});