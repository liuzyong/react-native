import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import styles from '../style/styles'

export default class FetchDemo extends React.Component {

  constructor(props) {
    super(props);
  };

  GetData = ()=>{
    let opts = {
      method: "GET"
    }
    fetch('https://reactnative.dev/movies.json', opts)
      .then((response) => {
        return response.text();
      })
      .then((responseText) => {
        Alert.alert(responseText);
      })
      .catch((error) => {
        Alert.alert(error);
      })
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={this.GetData}>
          <View>
            <Text>
              GET
          </Text>
          </View>

        </TouchableOpacity>
 
        <TouchableOpacity style={styles.btn}>
          <Text>
            POST
         </Text>
        </TouchableOpacity>
      </View>
    )
  };
}
