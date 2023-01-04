import React from "react";
import { 
    SafeAreaView, 
    View, 
    StyleSheet,
     Text,
     TouchableOpacity
     } from 'react-native';
import COLORS from "../Assets/Constants/color";


const Button = ({label, ...rest}) => {
    return (
        <View>
            <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor: COLORS.primaryColor ,
        width: 320,
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 20,
        padding: 10,
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontFamily: 'Alexandria-Bold',
        textAlign: 'center'
    }
})


export default Button;