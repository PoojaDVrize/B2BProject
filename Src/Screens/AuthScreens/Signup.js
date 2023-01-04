import { Alert, Keyboard, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../Assets/Constants/color'
import { CustomInput, DropdownMenu, Footer, Button } from '../../Components'
import axios from 'axios'
import { isContainsLowercase, isContainsNumber, isContainsSymbol, isContainsUppercase, isValidEmail, isValidName, isValidOrgRegistrationId, isValidPhoneNumber, isValidPincode, isValidWebsite } from '../../Utils/CommonMethods'
import { genderData, salutationData } from '../../Assets/Constants/data'
import DateTimePicker from '@react-native-community/datetimepicker';

const Signup = ({ navigation }) => {

    const [salutation, setSalutation] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(true);
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(true);
    const [dob, setDob] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dateText, setDateText] = useState('');
    const [gender, setGender] = useState(null);
    const [phoneNo, setPhoneNo] = useState(0);
    const [validPhoneNumber, setValidPhoneNumber] = useState(true);
    const [email, setEmail] = useState('');
    const [validMail, setValidMail] = useState(true);
    const [orgName, setOrgName] = useState('');
    const [orgRegistrationId, setOrgRegistrationId] = useState(0);
    const [validOrgRegistrationId, setValidOrgRegistrationId] = useState(true);
    const [orgWebsite, setOrgWebsite] = useState('');
    const [validOrgWebsite, setValidOrgWebsite] = useState(true);

    const [isFocus, setIsFocus] = useState(false);
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [address3, setAddress3] = useState('');
    const [pincode, setPincode] = useState(0);
    const [validPincode, setValidPincode] = useState(true);
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validConfirmPassword, setValidConfirmPassword] = useState(true);

    const [countryData, setCountryData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const [countryName, setCountryName] = useState(null);
    const [stateName, setStateName] = useState(null);
    const [cityName, setCityName] = useState(null);
    const [userType, setUserType] = useState('');

    useEffect(() => {
        textInputChange(firstName, 'FirstName');
        textInputChange(lastName, 'LastName');
        textInputChange(email, 'Email');
        textInputChange(phoneNo, 'PhoneNumber');
        textInputChange(pincode, 'Pincode');
        textInputChange(orgRegistrationId, 'OrgRegistrationId');
        textInputChange(orgWebsite, 'OrgWebsite');
        textInputChange(password, 'Password');
        textInputChange(confirmPassword, 'ConfirmPassword');
    }, [firstName, lastName, email, phoneNo, orgRegistrationId, orgWebsite, pincode, password, confirmPassword]);

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://api.countrystatecity.in/v1/countries',
            headers: {
                'X-CSCAPI-KEY': 'WjAwOTFqSlBKMDdRbzJtdG9FM1E0bThnOXlWc2c4b2xUQnpXQ1VTMQ=='
            }
        };

        axios(config)
            .then(function (response) {
                //console.log(JSON.stringify(response.data[0]));
                var count = Object.keys(response.data).length;
                let countryArray = [];
                for (var i = 0; i < count; i++) {
                    countryArray.push({
                        value: response.data[i].iso2,
                        label: response.data[i].name,
                    });
                }
                setCountryData(countryArray);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const handleState = (countryCode) => {
        var config = {
            method: 'get',
            url: `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
            headers: {
                'X-CSCAPI-KEY': 'WjAwOTFqSlBKMDdRbzJtdG9FM1E0bThnOXlWc2c4b2xUQnpXQ1VTMQ=='
            }
        };

        axios(config)
            .then(function (response) {
                //console.log(JSON.stringify(response.data));
                var count = Object.keys(response.data).length;
                let stateArray = [];
                for (var i = 0; i < count; i++) {
                    stateArray.push({
                        value: response.data[i].iso2,
                        label: response.data[i].name,
                    });
                }
                setStateData(stateArray);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleCity = (countryCode, stateCode) => {
        var config = {
            method: 'get',
            url: `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`,
            headers: {
                'X-CSCAPI-KEY': 'WjAwOTFqSlBKMDdRbzJtdG9FM1E0bThnOXlWc2c4b2xUQnpXQ1VTMQ==',
            },
        };

        axios(config)
            .then(function (response) {
                //console.log(JSON.stringify(response.data));
                var count = Object.keys(response.data).length;
                let cityArray = [];
                for (var i = 0; i < count; i++) {
                    cityArray.push({
                        value: response.data[i].id,
                        label: response.data[i].name,
                    });
                }
                setCityData(cityArray);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const textInputChange = (val, type) => {

        if (type == "FirstName") {
            setFirstName(val);
            if (!firstName) {
                setValidFirstName(true);
            }
            else if (!isValidName(firstName)) {
                setValidFirstName(false);
            }
            else {
                setValidFirstName(true);
            }
        }
        if (type == "LastName") {
            setLastName(val);
            if (!lastName) {
                setValidLastName(true);
            }
            else if (!isValidName(lastName)) {
                setValidLastName(false);
            }
            else {
                setValidLastName(true);
            }
        }
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
        if (type == "PhoneNumber") {
            setPhoneNo(val);
            if (!phoneNo) {
                setValidPhoneNumber(true);
            }
            else if (!isValidPhoneNumber(phoneNo)) {
                setValidPhoneNumber(false);
            } else {
                setValidPhoneNumber(true);
            }
        }
        if (type == "OrgRegistrationId") {
            setOrgRegistrationId(val);
            if (!orgRegistrationId) {
                setValidOrgRegistrationId(true);
            }
            else if (!isValidOrgRegistrationId(orgRegistrationId)) {
                setValidOrgRegistrationId(false);
            } else {
                setValidOrgRegistrationId(true);
            }
        }
        if (type == "OrgWebsite") {
            setOrgWebsite(val);
            if (!orgWebsite) {
                setValidOrgWebsite(true);
            }
            else if (!isValidWebsite(orgWebsite)) {
                setValidOrgWebsite(false);
            }
            else {
                setValidOrgWebsite(true);
            }
        }
        if (type == "Pincode") {
            setPincode(val);
            if (!pincode) {
                setValidPincode(true);
            }
            else if (!isValidPincode(pincode)) {
                setValidPincode(false);
            } else {
                setValidPincode(true);
            }
        }
        if (type == "Password") {
            setPassword(val);
            if (!password) {
                setValidPassword(true);
            } else if (password.length < 5 || !isContainsUppercase(password) || !isContainsLowercase(password) || !isContainsNumber(password) || !isContainsSymbol(password)) {
                setValidPassword(false);
            }
            else {
                setValidPassword(true);
            }
        }

        if (type == "ConfirmPassword") {
            setConfirmPassword(val);
            if (!confirmPassword) {
                setValidConfirmPassword(true);
            } else if (password !== confirmPassword) {
                setValidConfirmPassword(false);
            }
            else {
                setValidConfirmPassword(true);
            }
        }
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setShow(Platform.OS === 'ios');
        setDob(currentDate);

        let tempDate = new Date(currentDate);
        let date = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setDateText(date);
    }

    const clearForm = () => {
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setGender(null);
        setPhoneNo(0);
        setEmail('');
        setOrgName('');
        setOrgRegistrationId(0);
        setOrgWebsite('');
        setAddress1('');
        setAddress2('');
        setAddress3('');
        setPincode(0);
        setCountry(null);
        setState(null);
        setCity(null);
        setPassword('');
        setConfirmPassword('');
        setSalutation(null);
    }

    const submitForm = () => {
        Keyboard.dismiss();
        if (!firstName || !validFirstName || !validLastName || !middleName || !lastName || !gender || !phoneNo || !email || !validMail || !orgName || !orgRegistrationId || !orgWebsite || !salutation || !validPincode || !address1 || !address2 || !address3 || !country || !state || !city || !validPassword || !password || !confirmPassword || !validConfirmPassword) {
            Alert.alert('Error', 'Feilds Required');
        } else {
            setUserType('buyer');
            //dispatch signup
            console.log(address1, address2, address3, pincode);
            console.log(countryName, stateName, cityName, password, confirmPassword);
            console.log(orgName, phoneNo, orgRegistrationId, orgWebsite, dob);
            clearForm();
        }
    }
    return (
        <View style={styles.container}>
            <Text
                style={styles.leftArrow}
                onPress={() => {
                    navigation.navigate('Login')
                }}
            > &#10229;	</Text>

            <Text style={styles.title}>Create Account</Text>

            <ScrollView>
                <View style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>

                    <DropdownMenu
                        isFocus={isFocus}
                        setIsFocus={setIsFocus}
                        data={salutationData}
                        name="Salutation"
                        value={salutation}
                        onChange={item => {
                            setSalutation(item.value);
                            setIsFocus(false);
                        }}
                    />
                    <CustomInput
                        value={firstName}
                        onChangeText={(val) => setFirstName(val)}
                        iconName="account-outline"
                        placeholder="Enter your FirstName"
                    />
                    {validFirstName ? null : <Text style={styles.errorMsg}>Please enter a valid name</Text>}
                    <CustomInput
                        value={middleName}
                        onChangeText={(val) => setMiddleName(val)}
                        iconName="account-outline"
                        placeholder="Enter your MiddleName"
                        maxLength={1}
                    />
                    <CustomInput
                        value={lastName}
                        onChangeText={(val) => setLastName(val)}
                        iconName="account-outline"
                        placeholder="Enter your LastName"
                    />
                    {validLastName ? null : <Text style={styles.errorMsg}>Please enter a valid name</Text>}

                    <View style={styles.date}>
                        <TouchableOpacity onPress={() => setShow(true)}>
                            <Text style={{ fontSize: 20 }}>Select Date  </Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>{dateText}</Text>
                    </View>

                    {show && (
                        <DateTimePicker
                            value={dob}
                            mode="date"
                            is24Hour={true}
                            display='default'
                            onChange={onChange}
                        />
                    )}

                    <DropdownMenu
                        isFocus={isFocus}
                        setIsFocus={setIsFocus}
                        data={genderData}
                        name="Gender"
                        value={gender}
                        onChange={item => {
                            setGender(item.value);
                            setIsFocus(false);
                        }}
                    />
                    <CustomInput
                        value={phoneNo}
                        onChangeText={(val) => textInputChange(val, 'PhoneNumber')}
                        iconName="phone"
                        placeholder="Enter your phone number"
                        keyboardType='number-pad'
                        maxLength={10}
                    />
                    {
                        validPhoneNumber ? null : <Text style={styles.errorMsg}>Number length must be 10</Text>
                    }
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
                        value={orgName}
                        onChangeText={(val) => setOrgName(val)}
                        iconName="account-outline"
                        placeholder="Enter Organization Name"
                    />
                    <CustomInput
                        value={orgRegistrationId}
                        onChangeText={(val) => textInputChange(val, 'OrgRegistrationId')}
                        iconName="pin"
                        placeholder="Enter 10 digit orgID"
                        keyboardType='number-pad'
                        maxLength={10}
                    />
                    {
                        validOrgRegistrationId ? null : <Text style={styles.errorMsg}>ID length must be 10</Text>
                    }
                    <CustomInput
                        value={orgWebsite}
                        onChangeText={(val) => textInputChange(val, "OrgWebsite")}
                        iconName="web"
                        placeholder="Enter orgWebsite (xyz.com)"
                        autoCapitalize='none'
                    />
                    {
                        validOrgWebsite ? null : <Text style={styles.errorMsg}>Please enter a valid webisite</Text>
                    }

                    <CustomInput
                        value={address1}
                        onChangeText={(val) => setAddress1(val)}
                        iconName="home"
                        placeholder="Address Line 1"
                    />
                    <CustomInput
                        value={address2}
                        onChangeText={(val) => setAddress2(val)}
                        iconName="home"
                        placeholder="Address Line 2"
                    />
                    <CustomInput
                        value={address3}
                        onChangeText={(val) => setAddress3(val)}
                        iconName="home"
                        placeholder="Address Line 3"
                    />

                    <DropdownMenu
                        isFocus={isFocus}
                        setIsFocus={setIsFocus}
                        inputSearchStyle={styles.inputSearchStyle}
                        data={countryData}
                        search
                        name="Country"
                        value={country}
                        onChange={item => {
                            setCountry(item.value);
                            handleState(item.value);
                            setCountryName(item.label);
                            setIsFocus(false);
                        }}
                    />
                    <DropdownMenu
                        isFocus={isFocus}
                        setIsFocus={setIsFocus}
                        inputSearchStyle={styles.inputSearchStyle}
                        data={stateData}
                        search
                        name="State"
                        value={state}
                        onChange={item => {
                            setState(item.value);
                            handleCity(country, item.value);
                            setStateName(item.label);
                            setIsFocus(false);
                        }}
                    />
                    <DropdownMenu
                        isFocus={isFocus}
                        setIsFocus={setIsFocus}
                        inputSearchStyle={styles.inputSearchStyle}
                        data={cityData}
                        search
                        name="City"
                        value={city}
                        onChange={item => {
                            setCity(item.value);
                            setCityName(item.label);
                            setIsFocus(false);
                        }}
                    />

                    <CustomInput
                        value={pincode}
                        onChangeText={(val) => textInputChange(val, 'Pincode')}
                        iconName="pin"
                        placeholder="Enter your 6 digit pincode"
                        keyboardType='number-pad'
                        maxLength={6}
                    />
                    {
                        validPincode ? null : <Text style={styles.errorMsg}>Pincode length must be 6</Text>
                    }

                    <CustomInput
                        value={password}
                        onChangeText={(val) => textInputChange(val, 'Password')}
                        iconName="lock-outline"
                        placeholder="Enter your password"
                        password
                    />
                    {validPassword ? null :
                        <Text style={styles.errorMsg}>Minimum Password length is 5, should have atleast
                            one uppercase,lowercase,number,special character.</Text>
                    }

                    <CustomInput
                        value={confirmPassword}
                        onChangeText={(val) => textInputChange(val, 'ConfirmPassword')}
                        iconName="lock-outline"
                        placeholder="Enter password again"
                        password
                    />
                    {validConfirmPassword ? null : <Text style={styles.errorMsg}>Password does not match!</Text>}

                </View>

                <Button label="Singup" onPress={submitForm} />
                <Footer
                    text="Already have an account?"
                    screen='Login'
                    goto='Sign in'
                />
            </ScrollView > 
        </View >
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
    },
    leftArrow: {
        color: COLORS.black,
        fontSize: 48,
    },
    title: {
        fontSize: 34,
        fontFamily: 'Alexandria-SemiBold',
        color: COLORS.black,
        marginHorizontal: 10
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        fontFamily: 'Alexandria-Medium'
    },
    errorMsg: {
        color: COLORS.red,
        textAlign: 'center',
        fontSize: 18,
    },
    date: {
        width: 320,
        height: 60,
        backgroundColor: COLORS.lightWhite,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 3,
        borderRadius: 20,
        borderColor: COLORS.lightGrey,
        margin: 8
    }
})