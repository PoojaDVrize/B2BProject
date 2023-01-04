import { REGISTER_USER, LOGIN_USER } from "../Actions/Actions";
const initialState = {
    salutation: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    phoneNo: "",
    email: "",
    orgName: "",
    orgRegistrationId: "",
    orgWebsite: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    userType: "",
    registrationStatus: "",
    loginstatus: "",
}

function UserReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, registrationStatus: action.payload.success };

        case LOGIN_USER:
            const data = action.payload.payload
            return {
                ...state,
                salutation: data.salutation,
                firstName: data.firstName,
                middleName: data.middleName,
                lastName: data.lastName,
                dob: data.dob,
                gender: data.gender,
                phoneNo: data.phoneNo,
                email: data.email,
                orgName: data.orgName,
                orgRegistrationId: data.orgRegistrationId,
                orgWebsite: data.orgWebsite,
                addressLine1:data.companyAddress[0].addressLine1,
                addressLine2:data.companyAddress[0].addressLine2,
                addressLine3:data.companyAddress[0].addressLine3,
                city:data.companyAddress[0].city,
                state:data.companyAddress[0].state,
                country:data.companyAddress[0].country,
                pincode:data.companyAddress[0].pincode,
                userType:data.userType,
                loginstatus:action.payload.success,
            }
        default:
            return { ...state };
            break;
    }
}
export default UserReducer;