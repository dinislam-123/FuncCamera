import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform } from 'react-native';

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
            <View style={styles.mainapp}>
                <AppIntroSlider 
                    slides={slides}
                    onDone={this.onDone}
                    // showSkipButton={true}
                    // onSkip={this.onSkip}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({

    mainapp: {
        flex: 1,
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red'
        // padding: 20
    },
    image: {
        width: '95%',
        height: '80%',
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