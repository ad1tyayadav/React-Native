import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PopularCity() {
    return (
        <SafeAreaView>
            <ScrollView>

                <View style={styles.cardContainer}>
                    <View>
                        <Text style={styles.title}>Popular City</Text>
                    </View>
                    <View style={styles.cardBorder}>
                        <Image
                            source={{ uri: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                            style={styles.cardImage} />
                    </View>
                    <View style={styles.cardDets}>
                        <Text style={[styles.cardText, styles.text]}>Pink City, Jaipur</Text>
                        <Text style={styles.cardText}>180 Minutes away</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        marginLeft: 20,
        marginTop: 10,
        alignItems: 'flex-start'
    },
    cardDets: {
        width: '94.3%',
        height: 150,
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10
    },
    cardImage: {
        width: 320,
        height: 200,
        objectFit: 'cover',
    },
    cardBorder: {
        display: 'flex',
        alignItems: 'center'
    },
    cardText: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 9
    },
    text: {
        marginTop: 10
    }
})