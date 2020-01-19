import React, { Component } from 'react';

import {SafeAreaView, StyleSheet, View, Text, Platform } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

export default class SlideNoAnimate extends Component {

      constructor(props) {
        super(props);
        this.state = {

          show_App: false

        };
      }

    onDone = () => {
        this.setState({ show_App: true });
    };

    // onSkip = () => {
    //     this.setState({ show_App: true });
    // };

    render() {
        console.disableYellowBox = true
        return (
            <SafeAreaView  style={{backgroundColor:'#ff9999', margin:10, width:'95%',height:'95%', paddingTop:20}}>
            <View style={styles.mainapp}>
                <AppIntroSlider 
                    slides={slides}
                    onDone={this.onDone}
                    // showSkipButton={true}
                    // onSkip={this.onSkip}
                />
            </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({

    mainapp: {
        flex: 1,
        width:'100%',
        height:'95%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    image: {
        width: '80%',
        height: 300,
        borderRadius:150,
        alignSelf:'center',
        margin:5

        
    }
});

const slides = [
    {
        key: 's1',
        image: require('./assets/Image/wall-1.jpeg'),
        imageStyle: styles.image,
    },
    {
        key: 's2',
        image: require('./assets/Image/wall-2.jpeg'),
        imageStyle: styles.image,
    },
    {
        key: 's3',
        image: require('./assets/Image/wall-3.jpeg'),
        imageStyle: styles.image,
    },
    {
        key: 's4',
        image: require('./assets/Image/wall-4.jpeg'),
        imageStyle: styles.image,
    },
    {
        key: 's5',
        image: require('./assets/Image/wall-5.jpeg'),
        imageStyle: styles.image,
    },
];