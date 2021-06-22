import React, {FC} from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import {Ionicons} from '@expo/vector-icons'

interface Props {
    placeholder: string;
    onValueChange: (text: string) => void;
    require: any;
    title:string;
    value:any;
    items:any[];
  }

const Picker: FC<Props> = ({title,placeholder, items, onValueChange, value, require}) => {
    return (
        <View style={pickerSelectStyles.container}> 
            <Text style={pickerSelectStyles.title}>{title}</Text>
            <Text style={{color: 'red', paddingTop:10, fontSize:18}}>{require}</Text>
            <RNPickerSelect
                items={items}
                onValueChange={onValueChange}
                style={pickerSelectStyles}
                value={value}
                Icon={() => {
                    return <Ionicons name="chevron-down" size={24} color="#f63757" style={{margin:20}}/>;
            }}
            />
        </View>
    )
}

export default Picker

const pickerSelectStyles = StyleSheet.create({
  container:{
      flexDirection:'row',
      marginHorizontal: 30,
      marginTop:20,
      justifyContent:'space-between'
  },
  title:{
      fontSize: 18,
      fontWeight:'500',
      paddingTop: 18,
  },
  inputIOS: {
    fontSize: 18,
    fontWeight: 'normal',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 18,
    color: '#f63757',
    paddingRight: 40, // to ensure the text is never behind the icon
    margin: 10,
    width: 200,
    height: 40,
  },
  inputAndroid: {
    fontSize: 18,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 18,
    color: '#f63757',
    paddingRight: 30, // to ensure the text is never behind the icon
  },

});
