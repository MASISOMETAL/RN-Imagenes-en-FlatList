import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get("window")

const RenderHeroesList = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textNombre}>{item.nombre}</Text>
            <Image style={styles.img} source={item.img} />
            <View style={styles.row}>
                <Text style={styles.textAtaque}>Ataque: <Text style={styles.resetText}>{item.ataque}</Text></Text>
                <Text style={styles.textVida}>Vida: <Text style={styles.resetText}>{item.vida}</Text></Text>
                
            </View>
        </View>
    )
}

export default RenderHeroesList

const styles = StyleSheet.create({
    container: {
        //justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#f4a404",
        borderWidth: 1,
        margin: width * 0.03,
    },
    textNombre: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: height * 0.02,
    },
    row:{
        flexDirection: 'row',
        marginVertical: 10,
    },
    textAtaque: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    textVida: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    resetText:{
        fontSize: 16,
        fontWeight: '400',
    },
    img: {
        width: width * 0.7,
        height: width * 0.7,
    },
})