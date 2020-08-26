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
  TextInput,
  Image,
} from 'react-native';

// import GetData from './pages/fetch-demo'
// import DoubanPro from './pages/index.ios'

import Navigation from './pages/Navigation'


declare const global: { HermesInternal: null | {} };

const clickBtn = () => {
  Alert.alert("dianji shijian");
};


const App = () => {

  // 通过useState 触发onChangeText1函数时将参数传过来的值存在state中的value中  
  // It doesn’t matter what names you use. But it can be handy to think of the pattern as [<getter>, <setter>] = useState(<initialValue>)
  // https://reactnative.cn/docs/intro-react#state-%E7%8A%B6%E6%80%81
  const [value, onChangeText1] = React.useState('这个是value的默认值');

  return (
    <View style={styles.flex}>
      <Navigation />
    </View>


    // <GetData/>
    // <View style={styles.container}>
    //   <View style={styles.flex}>
    //     {/* <View style={styles.input}>
    //     </View> */}
    //     <TextInput style={styles.input} onChangeText={text => { onChangeText1(text) }}></TextInput>
    //   </View>
    //   {/* <TouchableOpacity style={styles.btn} onPress = {()=>{Alert.alert("dianji shijian")}} > */}
    //   <TouchableOpacity style={styles.btn} onPress={clickBtn} >
    //     <Text style={styles.search}>Search</Text>
    //   </TouchableOpacity>
    //   <View style={styles.flex}>
    //     <Text>{value}</Text>
    //   </View>


    //   <Image style={styles.tinyLogo}
    //     source={{
    //       uri: 'https://reactnative.dev/img/tiny_logo.png',
    //     }}></Image>


    // </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 45,
    marginTop: 50
  },
  flex: {
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
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },


});

export default App;
