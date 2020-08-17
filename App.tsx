/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: { HermesInternal: null | {} };

const  clickBtn = ()=>{
  Alert.alert("dianji shijian");
};


const App = () => {
 
  return (
    <View style={styles.container}>
      <View style ={styles.flex}> 
        <View style={styles.input}>
        </View>
      </View>
      {/* <TouchableOpacity style={styles.btn} onPress = {()=>{Alert.alert("dianji shijian")}} > */}
      <TouchableOpacity style={styles.btn} onPress = {clickBtn} >
        <Text style={styles.search}>Search</Text>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 45,
    marginTop: 50
  },
  flex:{
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: "#ccc",
    borderRadius: 4
  },
  btn: {
    width: 55,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#23BEFF",
    height: 45,
    justifyContent: "center",
    alignContent: "center"
  },
  search: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  }


});

export default App;
