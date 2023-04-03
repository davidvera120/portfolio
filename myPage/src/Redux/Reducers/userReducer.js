import { userTypes } from "../Types/userTypes";



export const userReducer = ( state = {}, action ) => {
    switch (action.type) {
        case userTypes.read:
            return {Pro:action.payload}

       
        default:
            return state;
    }
}