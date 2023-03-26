import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { Heroes } from '../data/Index'
import RenderHeroesList from '../components/RenderHeroesList'

const { height, width } = Dimensions.get("window")

const Home = () => {

    const RenderItem = ({ item }) => (
        <RenderHeroesList item={item} />
    )

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.titleText}>Flatlist y sus imagenes</Text>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={Heroes}
                    keyExtractor={(items) => items.id.toString()}
                    renderItem={RenderItem}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        height: height * 0.15,
        width: width,
        backgroundColor: "#f4a404",
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 1,

    },
    titleText: {
        backgroundColor: "#f4c404",
        padding: 5,
        fontSize: 24,
        fontWeight: 'bold',
    }
})