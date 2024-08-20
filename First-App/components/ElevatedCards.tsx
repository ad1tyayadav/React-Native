import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Elevated Cards</Text>
            <ScrollView horizontal={true}>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Thala</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>For</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Every</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Reason</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>MSD</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ElevatedCards

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
    card: {
        backgroundColor: 'lavender',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    cardText: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
    }
})