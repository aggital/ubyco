import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Element from 'react-native-elements'

const Card = ({id,amount, ...otherProps}) => {
    return (
        <View style={styles.container}>
            <Element.Text style={styles.balanceText}>Available Balance</Element.Text>
            <Element.Text style={styles.idText}>ID: {id}</Element.Text>
            <Element.Text style={styles.idText}>N{amount}</Element.Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container:{
        height: 150,
        width: 350,
        backgroundColor: '#6236ff',
        alignContent:'center',
        shadowOpacity:0.4,
        shadowRadius:0.6,
        borderRadius: 12,
        shadowColor:'red'
    },
    balanceText:{
        color: 'white', 
        fontSize: 16,
        padding: 10,
    },
    idText:{
        color: 'white', 
        fontSize: 16,
        padding: 10,
    },

})
