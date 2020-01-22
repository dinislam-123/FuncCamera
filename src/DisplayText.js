import React, {Component} from 'react';
import {SafeAreaView,StyleSheet,View,Text, Image} from 'react-native'

import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';


export default class DisplayText extends Component {

    constructor(props){
        super(props)
        this.state ={
            isHidden1: false,
            isHidden2: false,
            isHidden3: false,
            isHidden4: false
        }
    }

    _textClick1=()=>{
        if(this.state.isHidden1==true)
            {this.setState({isHidden1:false})}
        else
            {this.setState({isHidden1:true})}
    }
    _textClick2=()=>{
        if(this.state.isHidden2==true)
            {this.setState({isHidden2:false})}
        else
            {this.setState({isHidden2:true})}
    }
    _textClick3=()=>{
        if(this.state.isHidden3==true)
            {this.setState({isHidden3:false})}
        else
            {this.setState({isHidden3:true})}
    }
    _textClick4=()=>{
        if(this.state.isHidden4==true)
            {this.setState({isHidden4:false})}
        else
            {this.setState({isHidden4:true})}
    }

    render(){
        return(
            <SafeAreaView style={{backgroundColor:'#ff9999', margin:10, width:'95%',height:'95%', paddingTop:20}}>
                <View>
                    <Header
                    // leftComponent={<Icon name="menu" onPress={() => this._openDrawer()} />}
                        leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    />
                </View>
                <View style={{alignSelf:'center', paddingTop:20}}>
                    <Text style={styles.textItem} onPress={()=>{this._textClick1()}}>Chapter-1</Text>
                    {/* <Image source={require('./downwards-pointer.png')} style={{width:20, height:15}}></Image> */}
                    <View style={styles.item}>
                        {this.state.isHidden1 ?
                        <Text style={styles.text}>View is the most common element in React Native. You can 
                            it as an equivalent of the div element used in web development.When you need to wrap your elements 
                            inside the container, you can use View as a container element.
                        </Text>: null
                        }
                    </View>

                     <Text style={styles.textItem} onPress={()=>{this._textClick2()}}>Chapter-2</Text>
                     <View style={styles.item}>{this.state.isHidden2 ?
                         <Text style={styles.text}>This component can be nested and it can inherit properties from parent to child. 
                         This can be useful in many ways. We will show you example of capitalizing the first letter, styling words or parts of the text, etc.
                         </Text>: null
                         }
                     </View>

                     <Text style={styles.textItem} onPress={()=>{this._textClick3()}}>Chapter-3</Text>
                     <View style={styles.item}>{this.state.isHidden3 ?
                         <Text style={styles.text}>The React Native ListView is a view component which contains the list 
                         of items and displays in a vertical scrollable list. The minimum API to create list view is ListView.
                          DataSource. It populates a simple array of data blobs, and instantiate a ListView component with data source and a renderRow callback.
                         </Text>: null
                         }
                     </View>

                     <Text style={styles.textItem} onPress={()=>{this._textClick4()}}>Chapter-4</Text>
                     <View style={styles.item}>{this.state.isHidden4 ?
                         <Text style={styles.text}>There are two primary props you need to know about in a FlatList and that’s data and renderItem.
                          The first is an array of data used to create the list, typically an array of objects, and the second is the function that
                           will take an individual element of the data array and render a component for it.
                         </Text>: null
                         }
                     </View>

                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    item:{
        width:'90%',
        borderWidth:1,
        borderColor:'#ffe6e6',
        // alignSelf:'center',
        backgroundColor:'white'
    },

    textItem:{
        fontSize:20,
        fontWeight:'bold',
        color:'green',
        paddingLeft:10
        
    },
    text:{
        fontSize:20,
        color:'#80ff00',
        paddingLeft:5,
        fontStyle:'italic'
        // fontStyle:'italic',
        // fontFamily:'Arial'
    }
})