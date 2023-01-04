import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../Assets/Constants/color';

const SocialButtons = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.text}>
                --------- or SignIn with ---------
            </Text>
            <View style={styles.socialLoginView}>
                <TouchableOpacity>
                    <Icon name="facebook" style={styles.icon} color={COLORS.primaryColor} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="github" style={styles.icon} color={COLORS.black} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="twitter" style={styles.icon} color={COLORS.primaryColor} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SocialButtons

const styles = StyleSheet.create({
    text:{
        textAlign: 'center', 
        fontSize: 22, 
        color: COLORS.black,
        marginTop: 10,
        fontFamily: 'Alexandria-Light'
    },
    socialLoginView:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    icon:{
        fontSize: 40, 
        //color: COLORS.red,
    }
})