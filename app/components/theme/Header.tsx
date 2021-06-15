import React from 'react'
import { StyleSheet,View,Dimensions,SafeAreaView } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import {Icon,Text} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import {HeaderParamList} from '../../types'


const Header = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.svgCurve}>
                <View style={{height: 160}}>
                    <Svg
                    height="60%"
                    width="100%"
                    viewBox="0 0 1440 320"
                    >
                    <Path fill="#f63757" 
                   fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,208C384,171,480,117,576,101.3C672,85,768,107,864,117.3C960,128,1056,128,1152,112C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
                   </Svg>
                </View>
            </View>
            <View style={styles.headerTextContainer}>
            <Icon
                    name='menu'
                    type='ionicons'
                    color='white'
                    size={32}
                    onPress={() => navigation.toggleDrawer()}
                    containerStyle={{margin: 10}}
                />
            </View>
                
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        
      },
      headerTextContainer:{
        flexDirection:'row',
      },
})
