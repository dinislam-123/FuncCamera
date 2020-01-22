import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'

// import * as firebase from "firebase";
import { ScrollView } from 'react-native-gesture-handler';
import firebase1 from './Connection/Connection.js'
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

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
        firebase1.ref('ProductSell/').once('value')
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
                // console.log('data list======>',this.state.dataList)
                this.setState({ dataList:listData});
                // console.log('didmount....>',this.state.dataList)
            })
            .catch((error) => {
                console.log('Connection Problem....')
            })
    }

    _Real_Data=()=>{

        firebase1.ref('ProductSell/').once('value')
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
            // console.log('data list======>',this.state.dataList)
            this.setState({ dataList:listData});
            // console.log('didmount....>',this.state.dataList)
        })
        .catch((error) => {
            console.log('Connection Problem....')
        })

    }
componentDidMount=()=>{
    setInterval(() => {

        this._Real_Data();
        
    }, 2000);
}
       

    render() {

        console.disableYellowBox = true;
        // console.log('dataList====>',dataList)
        // dataList = this.state.dataList;

        // console.log('Render=====>', this.state.dataList)


        return (
            <SafeAreaView style={{backgroundColor:'#ff9999', margin:10, width:'95%',height:'95%', paddingTop:20}}>
                <View>
                    <Header
                    // leftComponent={<Icon name="menu" onPress={() => this._openDrawer()} />}
                        leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    />
                </View>
                <View >
                    <Text style={{ alignSelf: 'center', color: 'white' }}>Display Real Time Data</Text>
                    <ScrollView>
                        <View>
                            <ScrollView horizontal={true}>
                                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={{ Flex: 1, width: '95%' }}>
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

    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    data: { backgroundColor: 'white' }
});
