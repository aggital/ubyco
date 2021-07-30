import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as Element from 'react-native-elements'

import { Context as AuthContext } from '../../context/AuthContext'

// import Logo from '../../assets/images/logo.png'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(true)
    const { state, login, clearMessage } = React.useContext(AuthContext);

    const passwordVisibility = () => {
        setShowPassword(showPassword ? false : true)
    }

    const doSignin = async () => {
        state.errorMessage = ''
        setLoading(true)
        await login(email, password, () => {
            navigation.navigate('Root')
        })
        setLoading(false)
    };



    const goToSignUp = () => navigation.navigate('SignUp')

    React.useEffect(() => {
        const clearError = navigation.addListener('blur', () => {
            clearMessage()
        });

        return clearError;
    }, [navigation]);

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ alignSelf: 'center' }}>
                    <Element.Image
                        source={require('../../assets/images/logo.png')}
                        style={{
                            height: 200,
                            width: 200,
                            alignSelf: 'center'
                        }}
                    />
                </View>
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
                    <Element.Input
                        inputContainerStyle={{ borderWidth: 0.5, borderRadius: 15 }}
                        inputStyle={{ margin: 10 }}
                        containerStyle={{ marginTop: 0, alignSelf: 'center' }}
                        leftIconContainerStyle={{ marginLeft: 15 }}
                        leftIcon={
                            <Element.Icon
                                type='material-icon'
                                name='email'
                                size={24}
                                color='#333333'
                            />
                        }
                        errorStyle={{ color: '#f63757' }}
                        placeholder='Email'
                        errorMessage={state.errorMessage ? state.errorMessage.email : null}
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        autoCorrect={false}
                    />

                    <Element.Input
                        inputContainerStyle={{ borderWidth: 0.5, borderRadius: 15 }}
                        inputStyle={{ margin: 10 }}
                        containerStyle={{ marginTop: 0, alignSelf: 'center' }}
                        leftIconContainerStyle={{ marginLeft: 15 }}
                        leftIcon={
                            <Element.Icon
                                type='material'
                                name={showPassword ? 'visibility' : 'visibility-off'}
                                size={24}
                                color='#333333'
                                onPress={passwordVisibility}
                            />
                        }
                        errorStyle={{ color: '#f63757' }}
                        placeholder='password'
                        errorMessage={state.errorMessage ? state.errorMessage.password : null}
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize='none'
                        secureTextEntry={showPassword}
                        keyboardType='default'
                    />
                    {state.errorMessage.length > 0 ? <Element.Text style={{color:'red', fontSize:15, marginLeft:20, }}>{ state.errorMessage}</Element.Text> : null}
                    <Element.Button
                        title='Forget Password?'
                        type='clear'
                        titleStyle={{ color: '#f63757', fontSize: 13 }}
                        onPress={() => navigation.navigate('SignUp')}
                        containerStyle={{ alignSelf: 'flex-end', marginRight: 10 }}
                    />
                    <Element.Button
                        title="Login"
                        buttonStyle={{ height: 50, backgroundColor: '#f63757', borderRadius: 10 }}
                        containerStyle={{ margin: 10 }}
                        loading={loading}
                        onPress={doSignin}
                    />


                    <Element.Button
                        title='Don`t have an account? Sign Up'
                        type='clear'
                        titleStyle={{ color: '#f63757', fontSize: 15 }}
                        onPress={goToSignUp}
                    />
                </KeyboardAwareScrollView>




            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9e8ef'
    },
    header: {
        marginTop: 50,
        backgroundColor: '#f9e8ef',
        flex: 2,
    },

    footer: {
        flex: 4,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    }

})
