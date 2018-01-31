import React from 'react';
 import { Text, View,Image,ScrollView,TextInput,Button,Alert,StyleSheet } from 'react-native';
 import {Header,Left,Icon,Right,Body,Title,Item,Label,Input}  from 'native-base';
 
 const Content = () => {
 return  (
     <View 
    style={styles.main} >
     <Image 
       source={require('./demo.png')}
       style={styles.image}
        /> 
     <Text
      style={styles.heading} > Caprese Grey Sling Bag with Metallic Studs</Text>
    <View
      style={styles.view}>
      
   <TextInput 
   style={styles.input}
   placeholder="Check Delivery Status"
   placeholderTextColor='#1A237E'
   />
  <Button 
   onPress={() => {
    Alert.alert('Wrong pincode!');
  }}
 title="Check"
  color="#1A237E"/>
  </View>
   
<View style={styles.view}>
 <Button 
 title="Add to cart"
  color="#1A237E"/>
   <Button 
 title="Buy Now"
  color="#1A237E"/>
</View>
<Text style={styles.text1}> Product Details </Text>
<Text  style={styles.text2}> Grey sling bag with metallic studs, has a zip closure
1 main compartment, 1 external and 5 inner pockets
Non-Detachable Sling Strap </Text>


     </View>
       
    );
 }

 const styles = StyleSheet.create({
  view: {
   flexDirection:'row',
   padding:10   ,
   justifyContent: 'space-between'
  },
  main:
  {
      height:600,
      width:300,
      flex:0,
      flexDirection: 'column',
      marginHorizontal:20,
  },
  image:
  {
      height:250,
      width:250
      ,alignItems:'center',
      justifyContent:'center',
      marginHorizontal:10,
  },
  input:
  {
      height:17,
  width:180,
  fontSize:16,
  marginVertical:10,
  },
  heading:
  {
      fontSize:18,
  color:'#1A237E',
  fontWeight:'bold'
  },
  text1:
  {
      fontSize:16,
  color:'#1A237E',
  fontWeight:'500',
  padding:10
  },
  text2:
  {
      fontSize:16,
  color:'#1A237E',
  fontWeight:'200'
  },

});

 export default Content;