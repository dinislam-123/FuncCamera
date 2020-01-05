import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head3', 'Head4', 'Head5', 'Head6'],
            tableData: [
                ['1', '2', '3', '4', '5', '6'],
                ['a', 'b', 'c', 'd', 'e', 'f'],
                ['1', '2', '3', '456','23','1'],
                ['a', 'b', 'c', 'd','d','h']
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <SafeAreaView>
                <ScrollView horizontal={true}>
                <View style={styles.container}>
                    
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                            <Rows data={this.state.tableData} textStyle={styles.text} />
                        </Table>
                    
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6, width:30 }
});