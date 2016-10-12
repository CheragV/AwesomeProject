import React, { Component } from 'react';
import {
  Slider,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

class LoginPage extends Component {
  render(){
      return(
          <Navigator 
            renderScene={this.renderScene.bind(this)}
            navigator={this.props.navigator}
            navigationBar={
                <Navigator.NavigationBar style={{backgroundColor:"#47D38D", alignItems:"center"}}
                    routeMapper={NavigationBarRouteMapper}
                />
            }
          />
      );
  }

  renderScene(route,navigator){
      return(
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableHighlight onPress={this.goToNext.bind(this)}>
                    <Text style={{color: 'red'}}> LOGIN </Text>
                </TouchableHighlight>
          </View>
      );
  }

  goToNext(){
      this.props.navigator.push({
          id: "MainPage",
          name: "s djhscbns "
      })
  }

}



var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}} >
          LOGIN PAGE
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = LoginPage;