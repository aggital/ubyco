import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import * as Element from 'react-native-elements'
import Input from '../../components/Input'
import Button from '../../components/Button'

// import Logo from '../../assets/images/logo.png'

const VerifyScreen = () => {
    const [verify, setVerify]= React.useState('')

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}/>
            <View style={styles.footer}>
                <Element.Text style={{
                    alignSelf:'flex-start',
                    fontSize: 16,
                    color:'#333333',
                    fontWeight: 'normal',
                    margin: 20
                }}>
                    Let's get you started, Fill in all details
                </Element.Text>
                {/* Email Input type */}
                
                <KeyboardAwareScrollView>

                    <Input
                        icon='check'
                        type= 'material'
                        placeholder = 'Verify Token'
                        value={verify}
                        onChangeText={setVerify}
                        keyType="phone-pad"
                    />
                    <Button
                        title='Verify'
                        onPress={()=>navigation.navigate('Root')}
                    />

                    <Element.Button
                        title='Request A New Token'
                        type='clear'
                        titleStyle={{color:'#f63757', fontSize:15}}
                        onPress={()=>navigation.navigate('Root')}
                    />
                        
                   
                    
                    
                </KeyboardAwareScrollView>
                 



            </View>
        </SafeAreaView>
    )
}

export default VerifyScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9e8ef'
    },
    header:{
        backgroundColor: '#f9e8ef',
        flex: 2,
    },

    footer:{
        flex:3,
        backgroundColor:'white',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
    }

})
