import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Elements from 'react-native-elements'

const ListItem = ({name, rate}) => {
    return (
        <View style={styles.container}>
           <Elements.Avatar
                rounded
                source={{
                    uri:
                    'https://giftpass.co/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/i/t/itunes-gift-card-pile-600.png',
                }}
                containerStyle={{margin: 10}}
            />
            <Elements.Text style={{color: 'white', fontSize:18, alignSelf:'center'}}> 
                {name}
            </Elements.Text>
            <Elements.Text style={{color: 'white', fontSize:18, alignSelf:'center', paddingRight: 20}}> 
                {rate}
            </Elements.Text>

        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container:{
        height: 50,
        width: 350,
        backgroundColor: '#f63757',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignSelf:'center',
        opacity:0.8,
        shadowRadius:0.6,
        borderRadius: 12,
        shadowColor:'red'
    },
})
