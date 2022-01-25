
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native';

export default function Counter() {
    
        const [ct,setct] =useState(0);
        const increment=() => {
            setct(ct+1);
        }
        const decrement=() => {
            setct(ct-1);
        }
        const reset=() => {
            setct(0);
        }
        return(
    <View style={styles.container}>
    <View style={styles.comp}>
        <Text style={styles.text1}>{"\n\n"}      Hi!! This is a</Text>
        <Text style={styles.text1}>{"\n"}      Counter Application</Text>
    </View>
    <View style={styles.comp1}>
        <Text style={styles.text2}>{"\n"}     Count  {"\n"}          {ct}    {"\n"}</Text>
        
    </View>
    <View style={styles.hor}>
        <TouchableOpacity style={styles.bt} onPress={increment}>
            <Text style={styles.text21}> + </Text>
        </TouchableOpacity>
        <View style={{flex: 0.05}}></View>
        <TouchableOpacity style={styles.bt} onPress={decrement}>
            <Text style={styles.text21}> - </Text>
        </TouchableOpacity>
        <View style={{flex: 0.05}}></View>
        <TouchableOpacity style={styles.bt} onPress={reset}>
            <Text style={styles.text21}> Reset </Text>
        </TouchableOpacity>
        
        
    </View>
  </View>);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#FDFEF3',
  
},
comp:
{
    flex: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
},
comp1:
{
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    
    
},
bt:
{
   backgroundColor: "#698B71",
   borderRadius: 10,
},
text1:
{
  color: 'black',
  fontWeight: 'bold',
  fontSize: 30,
  alignItems: 'flex-start',
},
text2:
{
  color: 'black',
  backgroundColor: "#AFBCB0",
  fontWeight: 'bold',
  fontSize: 30,
  borderRadius:800,
  borderWidth: 10,
  borderColor: '#1E4431',
},
text21:
{
  color: 'black',
  backgroundColor: "#698B71",
  fontWeight: 'bold',
  fontSize: 30,
  borderRadius: 10,
  
},
hor:
{
    flex:0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
}
});
