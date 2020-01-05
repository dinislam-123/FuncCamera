
import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';

export default class TestDidmount extends Component {
    componentWillMount(){
       alert("Component Will Mount before component will mount");
    }
    componentDidMount(){
       alert("Component Did mount after mounting component");
    }
    render(){
      console.log("rendering component")
      return(
          <SafeAreaView>
                <Text> Rendering Component</Text>
          </SafeAreaView>
       
      )
    }
  }