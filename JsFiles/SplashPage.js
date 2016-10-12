
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

class SplashPage extends Component {
    componentWillMount() {
        var navigator = this.props.navigator;
        setTimeout(() => {
            navigator.replace({
                id: "LoginPage"
            });
        }, 2000);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 32, }}>SplashScreen</Text>
            </View>
        );

    }
}

module.exports= SplashPage