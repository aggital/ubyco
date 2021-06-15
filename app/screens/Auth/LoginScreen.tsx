import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import * as Element from 'react-native-elements'
import Input from '../../components/Input'
import Button from '../../components/Button'

// import Logo from '../../assets/images/logo.png'

const LoginScreen = () => {
    const [email, setEmail]= React.useState('')
    const [password, setPassword]= React.useState('')

    const navigation = useNavigation();
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{alignSelf:'center'}}>
                    <Element.Image
                        source={require('../../assets/images/logo.png')}
                        style={{
                            height: 200,
                            width: 200,
                            alignSelf:'center'
                        }}
                    />
                </View>
            </View>
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
                        icon='email'
                        type='material-icon'
                        placeholder = 'Email'
                        value={email}
                        onChangeText={setEmail}
                        keyType="email-address"
        
                    />

                    <Input
                        icon='visibility'
                        type='material'
                        placeholder = 'Password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry= {true}
                        keyType="default"
                    />
                     <Element.Button
                        title='Forget Password?'
                        type='clear'
                        titleStyle={{color:'#f63757', fontSize:13}}
                        onPress={()=> navigation.navigate('SignUp')}
                        containerStyle={{alignSelf:'flex-end', marginRight:10}}
                    />
                    <Button
                        title='Login '
                        onPress={()=>navigation.navigate('Root')}
                    />

                    <Element.Button
                        title='Don`t have an account? Sign Up'
                        type='clear'
                        titleStyle={{color:'#f63757', fontSize:15}}
                        onPress={()=>navigation.navigate('SignUp')}
                    />
                        
                   
                    
                    
                </KeyboardAwareScrollView>
                 



            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

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
        flex:4,
        backgroundColor:'white',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
    }

})
