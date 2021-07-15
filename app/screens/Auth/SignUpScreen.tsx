import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as Element from 'react-native-elements'
import { Context as AuthContext } from '../../context/AuthContext'


const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [fullname, setFullname] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(true)
    const { state, signup, clearMessage } = React.useContext(AuthContext);
   
    React.useEffect(() => {
        const clearError = navigation.addListener('blur', () => {
            clearMessage()
        });
    
        return clearError;
      }, [navigation]);

    console.log(state)

    const passwordVisibility = () => {
        setShowPassword(showPassword ? false : true)
    }
    const doSignup = async () => {
            state.errorMessage = ''
            setLoading(true)
            await signup(fullname, phone, email, password, () => {
                navigation.navigate('Verify')
            })
            setLoading(false)
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Element.Icon
                    type='material'
                    name='arrow-back'
                    containerStyle={{ alignSelf: 'flex-start', margin: 20 }}
                    onPress={() => navigation.navigate('Login')}
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
                    {/* Email Input */}
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
                                type='ant-design'
                                name='user'
                                size={24}
                                color='#333333'
                            />
                        }
                        errorStyle={{ color: '#f63757' }}
                        placeholder='Fullname'
                        errorMessage={state.errorMessage ? state.errorMessage.fullname : null}
                        value={fullname}
                        onChangeText={setFullname}
                        autoCapitalize='none'
                        keyboardType='default'
                    />

                    <Element.Input
                        inputContainerStyle={{ borderWidth: 0.5, borderRadius: 15 }}
                        inputStyle={{ margin: 10 }}
                        containerStyle={{ marginTop: 0, alignSelf: 'center' }}
                        leftIconContainerStyle={{ marginLeft: 15 }}
                        leftIcon={
                            <Element.Icon
                                type='material'
                                name='phone'
                                size={24}
                                color='#333333'
                            />
                        }
                        errorStyle={{ color: '#f63757' }}
                        placeholder='Phone'
                        errorMessage={state.errorMessage ? state.errorMessage.phone : null}
                        value={phone}
                        onChangeText={setPhone}
                        autoCapitalize='none'
                        keyboardType='numeric'
                    />
                    {/* Set password input */}
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
                        errorMessage={state.errorMessage ? state.errorMessage.password: state.errorMessage}
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize='none'
                        secureTextEntry={showPassword}
                        keyboardType='default'
                    />

                    <Element.Button
                        title="Sign up"
                        buttonStyle={{ height: 50, backgroundColor: '#f63757', borderRadius: 10 }}
                        containerStyle={{ margin: 10 }}
                        loading={loading}
                        onPress={doSignup}
                    />

                    <Element.Button
                        title='Already have an account? Sign In'
                        type='clear'
                        titleStyle={{ color: '#f63757' }}
                        onPress={() => navigation.navigate('Verify')}
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
        backgroundColor: '#f9e8ef',
        justifyContent: 'center'
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
