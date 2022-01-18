
import React from 'react';
import { StyleSheet, Text, View,Image,Button, TextInput,TouchableHighlight, Dimensions } from 'react-native';

export default function Login() {
  const [text, onChangeText] = React.useState("Sample");
  const [text1, onChangeText1] = React.useState("Password");
    return(
    <View style={styles.container}>
      <View style={styles.header}>
    <Image 
    style={styles.logo}
    source={require('androiddp/img/abc.jpg')}/>
    <Text style={styles.text1}>{"\n"}A Platform to boost learning{"\n"}</Text></View>
    <View style={styles.footer}>
      <Text>{"\n\n"}</Text>
    <View style={styles.fixToText}>
        
        <Button

      style={styles.button}
      color= '#4B0082'
      title="Signin"
      
      onPress={() => alert('')}
      
       /> 
       <Text></Text>
       <Button
      style={styles.button}
      title="Signup"
      color='#778899'
      onPress={() => alert('')}
      
       /> 
       <Text>{"\n"}</Text>
       </View>
      <Text style={styles.log}>{"\n"} Username{"\n"}</Text>
      <TextInput 
       style={styles.textinp}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.log}>{"\n"} Password{"\n"}</Text>
      <TextInput 
      
       style={styles.textinp}
        onChangeText={onChangeText1}
        value={text1}
        secureTextEntry={true}
      />
      <Text>{"\n"}</Text>
      <TouchableHighlight onPress={() => alert('Loading...')}  >
          <View style={styles.button}>
            <Text style={styles.textinp1}>Proceed</Text>
            
          </View>
        </TouchableHighlight>
     </View>
       </View>
       
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#2bf',
  alignItems: 'center',
  justifyContent: 'center',
},
button: {
    width: '70%',
    
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 10,
},
header:
{
  flex: 3,
  justifyContent: 'center',
  alignItems: 'center',
  
},
footer:
{
  flex:3,
  backgroundColor:'#ff0',
  borderTopRightRadius: 27,
  borderTopLeftRadius: 26,
  paddingVertical: 50,
  paddingHorizontal: 135,
},
text1:
{
  color: '#060',
  fontFamily: 'Sans',
  fontSize: 25,
  fontWeight: 'bold',
  justifyContent: 'center',
},
textinp: 
{
 
fontSize: 18,
fontFamily: 'Sans',
fontWeight: 'bold',
  height: 40,
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 15,
},
textinp1: 
{
 
fontSize: 18,
fontFamily: 'Sans',
fontWeight: 'bold',
  height: 40,
},
logo:
{
  width: 200,
  height: 200,
  borderRadius: 20,
},
fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
log: {
  color: '#060',
  fontSize: 18,
  fontFamily: 'Sans',
  fontWeight: 'bold',
},
});
