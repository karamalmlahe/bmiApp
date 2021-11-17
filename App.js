import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';

export default function App() {

  const[height,setHeight]=useState(0);
  const[weigth,setWeigth]=useState(0);
  const[result,setResult]=useState(0);
  const calBmi=()=>{
    const height1=height/100;
    let bmi= weigth/ (height1*height1);
    bmi=bmi.toFixed(2);
    setResult(bmi)
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30}}>{`Result is : ${result}`}</Text>
      <View style={{width:'100%',height:'90%',justifyContent: 'center'}}>
      <View style={{}}>
      <Text style={{textAlign:"center"}}>Please add your height in cm : </Text>
      <TextInput style={styles.inputStyle}
        value={height}
        onChangeText={text=>setHeight(text)}
      />
      </View>
      <View style={{width: '100%',marginTop: 20,justifyContent: 'center'}}>
      <Text style={{textAlign:"center"}}>Please add your weigth in cm : </Text>
      <TextInput style={styles.inputStyle}
        value={weigth}
        onChangeText={text=>setWeigth(text)}
      />
      </View>
      </View>
      <View style={{width: '100%',marginTop: 20,height:'10%'}}>
        <TouchableOpacity style={{backgroundColor:'#ffff00',paddingVertical:10,borderRadius:20} }onPress={calBmi}>
          <Text style={{textAlign:"center",fontSize:20}}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle:{
    backgroundColor:'#ffffff',
    width:'100%',
    borderRadius:20,
    paddingHorizontal:10,
    paddingVertical:10,
    marginTop:10,
    fontSize:16,
    textAlign: 'center'
  },
  container: {
    paddingVertical:70,
    flex: 1,
    backgroundColor: '#0099cc',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50,
  },
});
