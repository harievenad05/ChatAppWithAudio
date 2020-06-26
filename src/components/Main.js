import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');
export default class Main extends Component {
  static navigationOptions = {
    title: 'RNChat',
  };

  state = {
    name: '',
  };

  onPress = () => {
    if (this.state.name === '') {
      Alert.alert('Please enter your name');
      return;
    }
    this.props.navigation.navigate('Chat', {name: this.state.name});
    this.setState({name: ''});
  };

  onChangeText = (name) => {
    this.setState({name});
    console.log(name);
  };

  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#434A54'}}>
        <View style={{height: height, marginTop: 180}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: width,
            }}>
            <Text style={styles.title}>Enter your name to get started</Text>
          </View>
          <TextInput
            style={styles.nameInput}
            placeholder="eg: John"
            placeholderTextColor="#A7A8AC"
            onChangeText={this.onChangeText}
            value={this.state.name}
            autoCorrect={false}
            autoFocus={false}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
              width: width,
            }}>
            <TouchableOpacity
              onPress={this.onPress}
              style={{
                width: '60%',
                height: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginRight: 20,
    color: 'white',
    fontSize: 22,
  },
  nameInput: {
    height: offset * 2,
    margin: offset,
    fontSize: 18,
    paddingHorizontal: offset,
    borderColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    color: 'white',
  },
  buttonText: {
    marginRight: 20,
    fontSize: 22,
  },
});
