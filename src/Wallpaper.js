import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList, View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

// import { FlatList } from 'react-native-gesture-handler';

var imageList_11 = [{'id':'1','image': require('./assets/Image/wall-1.jpeg') },
                    {'id':'2','image': require('./assets/Image/wall-2.jpeg') },
                    {'id':'3','image': require('./assets/Image/wall-3.jpeg') },
                    {'id':'4','image': require('./assets/Image/wall-4.jpeg') }
                    ]
const imageList_22 =[ {'id':'5','image':require('./assets/Image/wall-5.jpeg')},
                      {'id':'6','image':require('./assets/Image/wall-6.jpeg')},
                      {'id':'7','image':require('./assets/Image/wall-7.jpeg')},
                      {'id':'8','image':require('./assets/Image/wall-8.jpeg')}
                    ]
const imageList_33 =[ {'id':'9','image':require('./assets/Image/wall-9.jpeg')},
                      {'id':'10','image':require('./assets/Image/wall-10.jpeg')},
                      {'id':'11','image':require('./assets/Image/wall-11.jpg')},
                      {'id':'12','image':require('./assets/Image/wall-12.jpeg')}
                    ]
const imageList_44 =[ {'id':'13','image':require('./assets/Image/wall-13.jpg')},
                      {'id':'14','image':require('./assets/Image/wall-14.jpeg')},
                      {'id':'15','image':require('./assets/Image/wall-15.jpeg')},
                      {'id':'16','image':require('./assets/Image/wall-16.jpeg')},
                    ]

const imageList_55 =[ { 'id':'17','image': require('./assets/Image/wall-2.jpeg')},
                      { 'id':'18','image': require('./assets/Image/wall-3.jpeg')},
                      { 'id':'19','image': require('./assets/Image/wall-4.jpeg')},
                      {'id':'20','image':require('./assets/Image/wall-17.jpeg')},
                    ]

export default class Wallpaper extends Component {

  render() {

    return (
      <SafeAreaView style={styles.safeArea}>
        <View>
                    <Header
                    // leftComponent={<Icon name="menu" onPress={() => this._openDrawer()} />}
                        leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    />
                </View>
        <ScrollView>
        <View >
          <FlatList
            data={imageList_11} horizontal={true}
            renderItem={({item}, index) => <View style={styles.imageContainer}><Image style={styles.photo} source={item.image}/></View>
            }
          />
        </View>

          <View>
          <FlatList
            data={imageList_22} horizontal={true}
            renderItem={({ item }, index) => <View style={styles.imageContainer}><Image style={styles.photo} source={item.image}/></View>
            }
          />
        </View>
        <View >
          <FlatList
            data={imageList_33} horizontal={true}
            renderItem={({ item },index) => <View style={styles.imageContainer}><Image style={styles.photo} source={item.image}/></View>
            }
          />
        </View>
         <View >
          <FlatList
            data={imageList_44} horizontal={true}
            renderItem={({ item }, index) => <View style={styles.imageContainer}><Image style={styles.photo} source={item.image}/></View>
            }
          />
        </View>

       <View >
          <FlatList
            data={imageList_55} horizontal={true}
            renderItem={({ item }, index) => <View style={styles.imageContainer}><Image style={styles.photo} source={item.image}/></View>
            }
          />
        </View>

        <View >
          <FlatList
            data={imageList_33} horizontal={true}
            renderItem={({ item }, index) => <View style={styles.imageContainer}><Image style={styles.photo} source={item.image}/></View>
            }
          />
        </View>  
        </ScrollView>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  safeArea:{
    margin:10,
    width:'95%',
    height:'95%',
    alignSelf:'center'
  },
  imageContainer:{
    width: 183,
    height: 200,
    // padding:5
    // margin:5
    paddingRight:5
  },

  photo: {
    height: 200,
    alignItems: 'center',
    paddingRight:5,
    margin:5
  }
})