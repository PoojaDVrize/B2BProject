import { Alert, Image, Keyboard, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../Assets/Constants/color'
import { Button , CustomInput, Footer, SocialButtons} from '../../Components/index'
import { isValidEmail } from '../../Utils/CommonMethods'
import { fontSizes, spacing } from '../../Assets/Constants/sizes'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validMail, setValidMail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    useEffect(() => {
        textInputChange(email,'Email');
        textInputChange(password,'Password');
    },[email,password]);

    const textInputChange = (val, type) => {

        if (type == "Email") {
            setEmail(val);
            if (email == '') {
                setValidMail(true);
            }
            else if (!isValidEmail(email)) {
                setValidMail(false);
            }
            else {
                setValidMail(true);
            }
        }

        if (type == "Password") {
            setPassword(val);
            if(password === ''){
                setValidPassword(true);
            }
            else if (password.length < 5) {
                setValidPassword(false);
            }
            else {
                setValidPassword(true);
            }
        }
    }

    const submitForm = () => {
        Keyboard.dismiss();
        if (!validMail || !validPassword ||email.length == 0 || password.length == 0) {
            Alert.alert('Error', 'Feilds Required');
        } else {
            //dispatch login
            console.log(email, password);
            setEmail('');
            setPassword('');
        }
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://uploads-ssl.webflow.com/5fdcd9ffc26d8060c8b6be80/6001f90deffd92dd8f439fd4_VrizeLogoside-p-500.png' }}
                    style={styles.image}
                    resizeMode='center' />
                <Text style={styles.textTitle}>Welcome to FirstApp</Text>
                <Text style={styles.textBody}>Log in to your existant account</Text>


                <View style={styles.formContainer}>
                    <CustomInput
                        value={email}
                        onChangeText={(val) => textInputChange(val, "Email")}
                        iconName="email-outline"
                        placeholder="Enter your email address"
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                    {
                        validMail ? null : <Text style={styles.errorMsg}>Please enter a valid email</Text>
                    }

                    <CustomInput
                        value={password}
                        onChangeText={(val) => textInputChange(val, "Password")}
                        iconName="lock-outline"
                        placeholder="Enter your password"
                        autoCapitalize='none'
                        password
                    />
                    {
                        validPassword ? null : <Text style={styles.errorMsg}>Password is less than 5 characters!</Text>
                    }


                </View>

                <TouchableOpacity style={{alignSelf:'flex-end',margin: spacing.sm}}>
                    <Text style={styles.txt}>Forgot Password?</Text>
                </TouchableOpacity>

                <Button label="Login" onPress={submitForm} />

                <SocialButtons/>

                <Footer
                    text="Don't have an account?"
                    screen='Signup'
                    goto='Sign up'
                />
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: COLORS.white
    },
    image: {
        width: 400,
        height: 150
    },
    textTitle: {
        fontSize: fontSizes.xl,
        color: COLORS.black,
        marginVertical: spacing.sm,
        fontFamily: 'Alexandria-Bold'
    },
    textBody: {
        fontSize: fontSizes.md+2,
        color: COLORS.black,
        fontFamily: 'Alexandria-Medium'
    },
    errorMsg: {
        color: COLORS.red,
        textAlign: 'center',
        fontSize: fontSizes.md,
        fontFamily: 'Alexandria-Light'
    },
    formContainer: {
        marginTop: spacing.xxl
    },
    txt: {
        color: COLORS.red, 
        marginVertical: 10, 
        fontSize: 18,
        fontFamily: 'Alexandria-Light'
    }
})