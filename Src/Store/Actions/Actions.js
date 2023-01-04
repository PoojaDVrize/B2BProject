import axios from "axios";

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_ALL = 'GET_ALL';
export const AUTHORIZE = 'AUTHORIZE';
export const PRODUCT_DETAILS = 'PRODUCT_DETAILS';
export const DEACTIVATE = 'DEACTIVATE';

const url = 'https://'

export const RegisterUser = data =>async(dispatch) =>{
    try{
        const result = await axios({
            method:'post',
            url:`${url}/users/register`,
            data:data,
        });
        dispatch({type:REGISTER_USER, payload: result.data});
    }catch(error){
        console.log(error);
    }
};

export const LoginUser = data =>async(dispatch) =>{
    try{
        const result = await axios({
            method:'post',
            url:`${url}/users/login`,
            data:data,
        });
        dispatch({type:LOGIN_USER, payload: result.data});
    }catch(error){
        console.log(error);
    }
};

export const GetAll = data =>async(dispatch)=>{
    try{
        const result = await axios({
            method:'post',
            url:`${url}/users/search`,
            data:data,
        });
        dispatch({type:GET_ALL, payload: result.data});
    }catch(error){
        console.log(error);
    }
}

export const Authorize = (data, userId) =>async(dispatch)=>{
    try{
        const result = await axios({
            method:'put',
            url:`${url}/users/userId/${userId}/authorize`,
            data:data,
        });
        dispatch({type:AUTHORIZE, payload: result.data});
    }catch(error){
        console.log(error);
    }
}

export const ProductDetails = (data, userId) =>async(dispatch)=>{
    try{
        const result = await axios({
            method:'get',
            url:`${url}/inventory/default/products`,
            data:data,
        });
        dispatch({type:PRODUCT_DETAILS, payload: result.data});
    }catch(error){
        console.log(error);
    }
}

export const Deactivate = (data, userId) =>async(dispatch)=>{
    try{
        const result = await axios({
            method:'put',
            url:`${url}/users/userId/${userId}/deactivate`,
            data:data,
        });
        dispatch({type:DEACTIVATE, payload: result.data});
    }catch(error){
        console.log(error);
    }
}


