import React, { Component } from 'react';

import { TouchableHighlight, SafeAreaView, ScrollView ,StyleSheet, View, Text, TextInput, Button } from 'react-native';
import io from "socket.io-client";

export default class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: []
    };
  }
  componentDidMount = () => {
    this.socket = io("http://127.0.0.1:3000");
    this.socket.on("chat message", msg => {
      this.setState({
        chatMessages: [...this.state.chatMessages, msg]
      });
    });
  }

  dataSend = () => {
    this.socket.emit('chat message', this.state.chatMessage);
    this.state.chatMessages.push(this.state.chatMessage)
    this.setState({ chatMessage: '' });

    // console.log(this.state.chatMessages)
  }

  render() {
    const chatMessages = this.state.chatMessages.map(textData => {
      return (<View style={styles.textData}>
        <Text style={{ flexShrink: 1, color:'white', fontSize:20}}>{textData}</Text></View>
      )
    })

    return (
    <SafeAreaView>
      <View style={styles.container}>
         <View style={styles.dataView}>
           <ScrollView>
            {chatMessages}
           </ScrollView>
        </View>
        <View style={styles.inputData}>
          <TextInput
            style={{ height: 40, borderWidth: 2, marginTop:5, paddingLeft: 5, width: '70%', color: 'red' }}
            autoCorrect={false}
            value={this.state.chatMessage}
            // onSubmitEditing={() => this.submitChatMessage()}
            onChangeText={chatMessage => {
              this.setState({ chatMessage });
            }}
          />
          <Button title="Send" style={{ width:50, height:35, backgroundColor:'blue'}} onPress={()=>this.dataSend()}>
          </Button>
          {/* <TouchableHighlight style={{ width:50, height:35, backgroundColor:'blue'}} onPress={()=>this.dataSend()}>
            <Text style={{color:'white'}}>Send</Text>
          </TouchableHighlight> */}
          
          
        </View>
      </View>
    </SafeAreaView>
    )}
}

const styles = StyleSheet.create({

  container:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
    width:'90%',
    height:'100%',
    // backgroundColor:'green',
    alignSelf:'center'
  },

  dataView:{
      width:'100%',
      height:'80%',
      // backgroundColor:'red'
  },
  
  inputData:{
    paddingLeft:5,
    flex:1,
    flexDirection:'row',
    alignContent:'space-between',
      width:'100%',
      height:'10%',
      paddingTop:10,
      // backgroundColor:'green'
    },

  textData: {
    // borderWidth: 2,
    flexDirection: 'row',
    top: 20,
    color:'white',
    fontWeight: 'bold',
    backgroundColor: 'blue',
    // width: '60%',
    height: 35,
    alignSelf:'center',
    padding:5,
    marginTop:5,
    borderRadius:20
  },
  // btnSend:{
   
  //   // backgroundColor:'blue',
  //   // alignSelf:'flex-end'
  // }
});