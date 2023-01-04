import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import COLORS from '../Assets/Constants/color';

const DropdownMenu = ({isFocus,setIsFocus,name,...props}) => {
    return (
        <Dropdown
            style={[styles.dropdown, isFocus]}
            placeholderStyle={styles.txt}
            selectedTextStyle={styles.txt}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? `Select ${name}` : '...'}
            searchPlaceholder="Search..."
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            {...props}
        />
    )
}

export default DropdownMenu

const styles = StyleSheet.create({
    dropdown: {
        width: 320,
        height: 50,
        borderColor: COLORS.lightGrey,
        borderWidth: 3,
        borderRadius: 20,
        paddingHorizontal: 8,
        alignSelf: 'center',
        marginBottom: 10,
        backgroundColor: COLORS.lightWhite,
    },
    txt: {
        fontSize: 16,
        fontFamily: 'Alexandria-Medium',
        textAlign: 'center'
    },
})