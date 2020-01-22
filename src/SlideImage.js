import React, { Component } from 'react'
import TimedSlideshow from 'react-native-timed-slideshow';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

export default class slideshow extends Component {

	render() {
		console.disableYellowBox = true;
		
		const items = [
			{
				uri: require('./assets/Image/wall-1.jpeg'),
				duration: 2000
			},
			{
				uri: require('./assets/Image/wall-2.jpeg'),
				duration: 2000
			},
			{
				uri: require('./assets/Image/wall-3.jpeg'),
				duration: 2000
			},
			{
				uri: require('./assets/Image/wall-4.jpeg'),
				duration: 2000
			}
		]

		return (
			<SafeAreaView>
				<View>
                    <Header
                    // leftComponent={<Icon name="menu" onPress={() => this._openDrawer()} />}
                        leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    />
                </View>
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