import React from 'react';
 import { Text, View,Image } from 'react-native';
 import {Container,Header,Left,Button,Icon,Right,Body,Title}  from 'native-base';
 
 const Hello = () => {
 return  (
   <Container>
        <Header style={styles.headerStyle}>
         <Image
          source={require('./logo.png')}
          style={styles.image} 
          /> 
       </Header>
      </Container>
    );
 }
 
 const styles = {
   headerStyle: {
       backgroundColor: '#fff',
       marginTop:17,
      }
   
   image:
   {
     height:50,
   width:50,
   justifyContent:'center',
   alignItems:'center'
   }
 };
 
 export default Hello;