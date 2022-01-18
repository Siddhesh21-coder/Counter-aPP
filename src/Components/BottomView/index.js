
import React from 'react';
import { StyleSheet, Text, View,Image, TextInput } from 'react-native';

export default function BottomView() {
    return(
    <View style={styles.container}>
    <Text style={styles.text1}>Login{"\n"}</Text>
    <Image
        style={styles.tinyLogo}
        source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
      />
      <TextInput placeholder='Enter Text here'/>
  </View>);
}

const styles = StyleSheet.create({
container: {
  flex: 2,
  backgroundColor: '#f0f',
  alignItems: 'center',
  justifyContent: 'center',
},
text1:
{
  color: 'blue',
  fontWeight: 'bold',
},
tinyLogo:
{
  width: 100,
  height: 100,
},
});
