import React,{FC} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Elements from 'react-native-elements'



interface Props {
    name: string;
    rate: string;
    image:string
 }
const ListItem :FC<Props>= ({name, rate, image}) => {
    return (
        <View style={styles.container}>
           <Elements.Avatar
                rounded
                source={{
                    uri:
                    `${image}`,
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
