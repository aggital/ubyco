import React ,{FC} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Element from 'react-native-elements'


interface Props {
    bank: string;
    accountNumber: string,
    name: string
 }
const AccountCard :FC<Props> = ({bank,accountNumber, name}) => {
    return (
        <View style={styles.container}>
            <Element.Text style={styles.balanceText}>Bank:{bank} </Element.Text>
            <Element.Text style={styles.idText}>Account No: {accountNumber}</Element.Text>
            <Element.Text style={styles.idText}>Name: {name}</Element.Text>
        </View>
    )
}

export default AccountCard

const styles = StyleSheet.create({
    container:{
        height: 190,
        width: 180,
        backgroundColor: '#f63757',
        alignContent:'center',
        shadowOpacity:0.4,
        shadowRadius:0.6,
        borderRadius: 12,
        shadowColor:'red'
    },
    balanceText:{
        color: '#fff', 
        fontSize: 20,
        padding: 10,
    },
    idText:{
        color: '#fff', 
        fontSize: 18,
        padding: 10,
    },

})
