import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Flat Cards</Text>
            <View style={styles.cardContainer}>
                <View style={styles.cardOne}>
                    <Text style={styles.cardText}>Red</Text>
                </View>
                <View style={styles.cardTwo}>
                    <Text style={styles.cardText}>Blue</Text>
                </View>
                <View style={styles.cardThree}>
                    <Text style={styles.cardText}>Green</Text>
                </View>
            </View>
        </View>
    )
}

export default FlatCards

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginLeft: 20
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    cardContainer: {
        display: "flex",
        flexDirection: 'row',
        marginTop: 10
    },
    cardOne: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    cardTwo: {
        backgroundColor: 'skyblue',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    cardThree: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    cardText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    }
})