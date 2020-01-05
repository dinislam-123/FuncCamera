import React, { Component } from 'react'
import TimedSlideshow from 'react-native-timed-slideshow';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default class slideshow extends Component {

	render() {
		console.disableYellowBox = true;
		
		const items = [
			{
				uri: require('./assets/Image/wall-1.jpeg'),
				// uri: "http://www.lovethemountains.co.uk/wp-content/uploads/2017/05/New-Outdoor-Sports-and-Music-Festival-For-Wales-4.jpg",
				// title: "Michael Malik",
				// text: "Minnesota, USA",
				duration: 2000
			},
			{
				uri: require('./assets/Image/wall-2.jpeg'),
				// uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
				// title: "Victor Fallon",
				// text: "Val di Sole, Italy",
				duration: 2000
			},
			{
				uri: require('./assets/Image/wall-3.jpeg'),
				// uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
				// title: "Mary Gomes",
				// text: "Alps"
				// fullWidth: true
				duration: 2000
			},
			{
				uri: require('./assets/Image/wall-4.jpeg'),
				// uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
				// title: "Mary Gomes",
				// text: "Alps",
				// fullWidth: true
				duration: 2000
			}
		]

		return (
			<SafeAreaView>
				<View style={styles.imageStyle}>
					<TimedSlideshow items={items} />
				</View>
			</SafeAreaView>

		);
	}
}
const styles = StyleSheet.create({
	imageStyle: {
		width: '95%',
		height: '95%',
		alignSelf: 'center'

	}
})