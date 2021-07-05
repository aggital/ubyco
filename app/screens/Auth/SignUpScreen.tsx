import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as Element from 'react-native-elements'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { Context as AuthContext } from '../../context/AuthContext'

import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [fullname, setFullname] = React.useState('')

    const { state, signup } = React.useContext(AuthContext);


    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Element.Icon
                    type='material'
                    name='arrow-back'
                    containerStyle={{ alignSelf: 'flex-start', margin: 20 }}
                    onPress={() => navigation.goBack()}
                />
                <Element.Text style={{
                    alignSelf: 'center',
                    fontSize: 19,
                    color: '#f63757',
                    fontWeight: 'bold'
                }}>
                    Create Account
                </Element.Text>
            </View>
            <View style={styles.footer}>
                <Element.Text style={{
                    alignSelf: 'flex-start',
                    fontSize: 16,
                    color: '#333333',
                    fontWeight: 'normal',
                    margin: 20
                }}>
                    Let's get you started, Fill in all details
                </Element.Text>
                {/* Email Input type */}

                <KeyboardAwareScrollView>
                    <Input
                        icon='email'
                        type='material'
                        placeholder='Email'
                        value={email}
                        onChangeText={setEmail}
                        keyType="email-address"
                    />
                    {state.errorMessage.email ? <Element.Text>{state.errorMessage.email}</Element.Text> : null}

                    <Input
                        icon='user'
                        type='ant-design'
                        placeholder='Username'
                        value={fullname}
                        onChangeText={setFullname}
                        keyType="default"
                    />

                    <Input
                        icon='phone'
                        type='material'
                        placeholder='Phone'
                        value={phone}
                        onChangeText={setPhone}
                        keyType="phone-pad"
                    />

                    <Input
                        icon='visibility'
                        type='material'
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        keyType="default"
                    />
                    
                    <Button
                        title='Sign Up'
                        onPress={(email, fullname, password, phone) => {
                            signup(email, password, fullname, phone, () => navigation.navigate('Verify'))
                        }
                    />

                    <Element.Button
                        title='Already have an account? Sign In'
                        type='clear'
                        titleStyle={{ color: '#f63757' }}
                        onPress={() => navigation.navigate('Login')}
                    />




                </KeyboardAwareScrollView>




            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9e8ef'
    },
    // header:{
    //     backgroundColor: '#f9e8ef'
    // },

    footer: {
        flex: 4,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    }

})
