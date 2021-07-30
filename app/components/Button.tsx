import React, {FC} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Element from 'react-native-elements'


interface Props {
   title: string;
   onPress: any;
   loading: boolean;
}
const Button: FC<Props> = ({title, onPress, loading}) => {
    return (
        <View>
           <Element.Button 
            title= {title}
            buttonStyle={{height: 50, backgroundColor:'#f63757', borderRadius: 10}}
            containerStyle={{margin: 10}}
            onPress={onPress}
            loading={loading}
         />
        </View>
    )
}

export default Button
