
import React from 'react';
import { StyleSheet, Text, View,Image, TextInput } from 'react-native';

export default function TopView() {
    return(
    <View style={styles.container}>
    <Text style={styles.text1}>LOGIN{"\n"}</Text>
      <TextInput style={styles.textinp} placeholder='Enter Text here'/>
  </View>);
}

const styles = StyleSheet.create({
container: {
  flex: 3,
  backgroundColor: '#ff0',
  alignItems: 'center',
  justifyContent: 'center',
},
text1:
{
  color: 'blue',
  fontWeight: 'bold',
},
textinp: 
{
  width: '95%',
  height: 40,
  borderColor: 'blue',
  borderWidth: 1,
  borderRadius: 30,
},
tinyLogo:
{
  width: 200,
  height: 200,
},
});
