import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'

import * as firebase from "firebase";
import { ScrollView } from 'react-native-gesture-handler';

// import { YellowBox } from 'react-native';

// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

let config = {
    apiKey: "AIzaSyAQk0a1tg1D1_BUHikaepJGCtkYisjb4jo",
    authDomain: "reactbuysell.firebaseapp.com",
    databaseURL: "https://reactbuysell.firebaseio.com",
    projectId: "reactbuysell",
    storageBucket: "reactbuysell.appspot.com",
    messagingSenderId: "597664386430",
    appId: "1:597664386430:web:848f4ec10cd956f0f4372f"
};

const app = firebase.initializeApp(config);
firebasedb = app.database();

export default class RealData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
            // dataObject: {},
            tableHead: ['Product Name', 'Description', 'Price', 'RemQty', 'Seller Name', 'Bought From', 'Total Qty'],
            dataWidth: [100,200,50,50,100,100,50]
        };
    }

    componentDidMount() {
        firebasedb.ref('ProductSell/').once('value')
            .then((snapshot) => {
                const data = snapshot.val();
                var listData = [];

                snapshot.forEach((data) => {
                    var productName = data.val().ProductName
                    var desc = data.val().Description
                    var price = data.val().Price
                    var remQty = data.val().RemainingQty
                    var sellerName = data.val().SellerName
                    var boughtFrom = data.val().BoughtFrom
                    var totalQty = data.val().TotalQty

                    var array1 = []
                    array1.push(productName, desc, price, remQty, sellerName, boughtFrom, totalQty)
                    listData.push(array1)

                    // const dataObject = {
                    //     'ProductName': productName,
                    //     'Qty': quantity
                    // }
                    // listData.push(dataObject)

                })

                console.log('Lenth of object=======>', listData.length)
                console.log('List Data----------->', listData)
                this.setState({ dataList: listData });
                console.log('Data List----------->', this.state.dataList)

                // var array1=[];
                // for (var x in listData) {
                // console.log('inside loop=====>',listData[x].ProductName);
                //   }
                // for(var i=0; i<listData.length; i++)
                // {
                //     console.log('inside loop',listData[i].ProductName)
                // }
            })
            .catch((error) => {
                console.log('Connection Problem....')
            })
    }

    componentWillMount = () => {
        setInterval(() => {
            firebasedb.ref('ProductSell/').once('value')
                .then((snapshot) => {
                    const data = snapshot.val();
                    var listData = [];

                    snapshot.forEach((data) => {
                        var productName = data.val().ProductName
                        var desc = data.val().Description
                        var price = data.val().Price
                        var remQty = data.val().RemainingQty
                        var sellerName = data.val().SellerName
                        var boughtFrom = data.val().BoughtFrom
                        var totalQty = data.val().TotalQty

                        var array1 = []
                        array1.push(productName, desc, price, remQty, sellerName, boughtFrom, totalQty)
                        listData.push(array1)
                    })
                })
                .catch((error) => {
                    console.log('Connection Problem....')
                })
        }, 2000);
    }

    render() {

        console.disableYellowBox = true;

        // console.log('Render=====>', this.state.dataList)


        return (
            <SafeAreaView style={{ backgroundColor: 'green', width: '95%', height: '95%', alignSelf: 'center' }}>
                <View >
                    <Text style={{ alignSelf: 'center', color: 'white' }}>Display Real Time Data</Text>
                    <ScrollView>
                        <View>
                            <ScrollView horizontal={true}>
                                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={{ Flex: 1, paddingLeft: 5, width: '95%' }}>
                                    <Row  widthArr={this.state.dataWidth} data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                    <Rows widthArr={this.state.dataWidth} data={this.state.dataList} style={styles.data} />
                                </Table>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    dataContainer: {
        flex: 1,
        flexDirection: 'row',
    },

    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    data: { backgroundColor: 'white' }
});
