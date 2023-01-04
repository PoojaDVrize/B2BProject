import { AUTHORIZE, DEACTIVATE, GET_ALL, PRODUCT_DETAILS } from "../Actions/Actions";
const initialState = {
    authorizeStatus:"",
    deactivateStatus:"",
}
function AdminReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL:
            return action.payload.users;
        case AUTHORIZE:
            return {...state, authorizeStatus:action.payload.success};
        case PRODUCT_DETAILS:
            return {...state};
        case DEACTIVATE:
            return {...state, deactivateStatus:action.payload.success};
        default:
            return {...state};
        
    }
}
export default AdminReducer;