export const isValidEmail = (value) => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value);
}

export const isContainsUppercase = (value) => {
    const regx = /^(?=.*[A-Z]).*$/;
    return regx.test(value);
}

export const isContainsLowercase = (value) => {
    const regx = /^(?=.*[a-z]).*$/;
    return regx.test(value);
}

export const isContainsNumber = (value) => {
    const regx = /^(?=.*[0-9]).*$/;
    return regx.test(value);
}

export const isContainsSymbol = (value) => {
    const regx = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    return regx.test(value);
}

export const isValidPhoneNumber = (value) => {
    const regx = /^[6-9]\d{9}$/ ;
    return regx.test(value);
}
export const isValidPincode = (value) => {
    const regx = /^\d{6}$/;
    return regx.test(value);
}
export const isValidOrgRegistrationId = (value) => {
    const regx = /^\d{10}$/;
    return regx.test(value);
}

export const isValidWebsite = (value) => {
    const regx = /^([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value);
}

export const isValidName = (value) => {
    const regx = /^[A-Za-z ][A-Za-z0-9_ ]{2,20}$/;
    return regx.test(value);
}