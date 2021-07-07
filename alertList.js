import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    item: {
        padding: '0%',
        fontSize: 16,
        height: 30,
        color: '#b7b7b7',

    },
});

class AlertList extends Component {
    render() {
        return (
            
            <View>
                    <FlatList 
                        data={[
                            { key: '6/13 11:11 AM inclusion Alert' },
                            { key: '6/14 11:11 AM inclusion Alert' },
                            { key: '6/15 11:11 AM inclusion Alert' },
                            { key: '6/16 11:11 AM inclusion Alert' },
                            { key: '6/17 11:11 AM inclusion Alert' },
                            { key: '6/18 11:11 AM inclusion Alert' },
                            { key: '6/19 11:11 AM inclusion Alert' },
                            { key: '6/20 11:11 AM inclusion Alert' },
                            { key: '6/21 11:11 AM inclusion Alert' },
                            { key: '6/22 11:11 AM inclusion Alert' },
                        ]}
                        renderItem={({ item, index }) => (
                            <View style={{backgroundColor: index % 2 == 0  ? "#f7f7f7" : "white",
                                alignContent: 'center'
                            }}>
                            <Text style={styles.item}>{item.key}</Text>
                            </View>
                            
                        )}
                    />
                </View>
            
        );
    }
}

export default AlertList;