/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import MyClass1 from './JsFiles/MyClass1.js'
import SplashPage from './JsFiles/SplashPage.js'
import LoginPage from './JsFiles/LoginPage.js'
import MainPage from './JsFiles/MainPage.js'

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    state = {
      value: 0
    }
  }

  render() {
    return (
        <Navigator 
            initialRoute={{id:'SplashPage', name:"Index"}}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route)=>{
              if(route.sceneConfig){
                return route.sceneConfig;
              }
             return Navigator.SceneConfigs.FloatFromRight;
            }}
          />  
      
    );
  }

renderScene(route,navigator){
    var routeId=route.id;
    if(routeId=="SplashPage"){
      return(
        <SplashPage navigator={navigator}/>
      );
    }
    else if(routeId=="LoginPage"){
      return(
        <LoginPage navigator={navigator}/>
      ); 
    }
    else if(routeId=="MainPage"){
      return(
        <MainPage navigator={navigator}/>
      ); 
    }
    return this.noRoute(navigator);
}

noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, padding:20, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>Return back to previous screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
