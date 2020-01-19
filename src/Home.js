import React, { Component } from 'react';
import { TouchableHighlight, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, Alert,Button } from 'react-native';

export default class Home extends Component {

    render() {

        console.disableYellowBox = true
        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={styles.safeArea}>
                <ScrollView>
                    <View style={styles.HomeStyle}>
                    {/* onPress={() => navigate('ProductList')} */}
                            <TouchableHighlight onPress={()=>navigate('DisplayText')}
                                style={{marginTop:15, backgroundColor: '#ff00ff', width: '80%',height:40, borderRadius: 10 }} >
                                <Text style={styles.textStyle}>Display Text</Text>
                            </TouchableHighlight>
                       
                            <TouchableHighlight onPress={()=>navigate('DataTable')}
                                style={{marginTop:15, backgroundColor: '#ff00ff', width: '80%',height:40, borderRadius: 10 }} >
                                <Text style={styles.textStyle}>Data Table</Text>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={()=>navigate('ChatApp')}
                                style={{marginTop:15, backgroundColor: '#ff00ff', width: '80%',height:40, borderRadius: 10 }} >
                                <Text style={styles.textStyle}>Chat App</Text>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={()=>navigate('RealData')}
                                style={{marginTop:15, backgroundColor: '#ff00ff', width: '80%',height:40, borderRadius: 10 }} >
                                <Text style={styles.textStyle}>Real Data</Text>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={()=>navigate('Wallpaper')}
                                style={{marginTop:15, backgroundColor: '#ff00ff', width: '80%',height:40, borderRadius: 10 }} >
                                <Text style={styles.textStyle}>Wallpaper</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={()=>navigate('SlideImage')}
                                style={{marginTop:15, backgroundColor: '#ff00ff', width: '80%',height:40, borderRadius: 10 }} >
                                <Text style={styles.textStyle}>Slide Animation Image</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={()=>navigate('SlideNoAnimate')}
                                style={{marginTop:15, backgroundColor: '#ff00ff', width: '80%',height:40, borderRadius: 10 }} >
                                <Text style={styles.textStyle}>Slide No Animation</Text>
                            </TouchableHighlight>
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    safeArea:{
        // marginTop:30,
        margin:10,
        backgroundColor:'#00ffbf',
        height:'90%'
      },
    
    HomeStyle: {
        // marginTop:20,
        flex:1,
        paddingTop: '50%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    textStyle:{
        color:'blue',
        alignSelf:'center',
        paddingTop:5,
        fontSize:20

    }
})


