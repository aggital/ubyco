import React, {FC} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Element from 'react-native-elements'

interface Props {
    placeholder: any;
    onChangeText: any;
    secureTextEntry?: boolean;
    disable?: boolean;
    keyType: any;
    value:any;
    title:string;
  }

const RandomInput: FC<Props> = ({title, keyType, placeholder, disable, secureTextEntry, value, onChangeText, ...otherProps }) => {
    return (
            <View style={styles.random}>
                <Element.Text style={styles.randomText}>
                {title}
                </Element.Text>

                <Element.Input
                    containerStyle={{ 
                        width: 230,
                    }}
                    placeholder={placeholder}
                    inputContainerStyle={styles.randomInput}
                    inputStyle={{color:'#f63757', paddingHorizontal: 10}}
                    value={value}
                    onChangeText={onChangeText}
                    autoCapitalize='none'
                    keyboardType={keyType}
                    secureTextEntry ={secureTextEntry}
                    disabled={disable}
                />
          </View>
    )
}

export default RandomInput

const styles = StyleSheet.create({
    random:{
        flexDirection:'row', 
        justifyContent:'space-between',
        marginHorizontal: 30,
        marginTop:20
      },
      randomText:{ 
        fontSize: 18,
        fontWeight:'500',
        paddingTop: 18,
       },
       randomInput:{
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#f63757',
        paddingLeft: 10 
      },    
})
