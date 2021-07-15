import React, {FC} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Element from 'react-native-elements'

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    keyType: any;
    type:string;
    value:any;
    icon:string;

  }

const Input: FC<Props> = ({icon, value, onChangeText, placeholder, type, keyType,secureTextEntry}) => {
    return (
                <Element.Input
                inputContainerStyle={{borderWidth:0.5, borderRadius: 15 }}
                inputStyle={{margin: 10}}
                containerStyle={{marginTop: 0, alignSelf:'center'}}
                leftIcon = {
                    <Element.Icon
                    type={type}
                    name={icon}
                    size={24}
                    color='#333333'
                    // onPress={iconPressed}
                    />
                }
                leftIconContainerStyle={{marginLeft:15}}
                errorStyle={{color: '#f63757' }}
                errorMessage= 'something is worng'
                value={value}
                onChangeText={onChangeText}
                autoCapitalize='none'
                placeholder={placeholder}
                keyboardType={keyType}
                secureTextEntry ={secureTextEntry}
            />
    )
}

export default Input

const styles = StyleSheet.create({})
