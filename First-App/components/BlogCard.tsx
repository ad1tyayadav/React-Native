import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button } from 'react-native'
import React from 'react'

export default function BlogCard() {
    return (
        <SafeAreaView>
            <ScrollView>

                <View style={styles.cardContainer}>
                    <View>
                        <Text style={styles.title}>Blogs</Text>
                    </View>
                    <View style={styles.cardBorder}>
                        <View style={styles.blogBG}>
                            <Text style={styles.blogTitle}>Her Code, Her Rules :)</Text>
                        </View>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1641808887202-3fea3721dc7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                            style={styles.cardImage} />
                            <View style={styles.button}>
                        <Button
                            title="Read More"
                        />
                        <Button
                            title="Follow Me"
                        />
                    </View>
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
        alignItems: 'center',
        height: 380,
        backgroundColor: 'white'
    },
    cardText: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 9
    },
    text: {
        marginTop: 10
    },
    blogTitle: {
        fontSize: 17,
        color: 'gray',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10
    },
    blogBG: {
        backgroundColor: 'white',
        width: 320,
        height: 50,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
    display: 'flex',
    flexDirection: 'row',
    gap: 80,
    marginLeft: 10,
    marginTop: 50,
    marginBottom: 20
    }
})