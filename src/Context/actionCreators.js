

export const LOGIN_REQUEST={
    type:"LOGIN_REQUEST"
}
export const LOGIN_SUCCESS=(token)=>{
   return {
    type:"LOGIN_SUCCESS",
    payLoad:token
   }
}
export const LOGIN_FAILURE={
    type:"LOGIN_FAILURE"
}
export const GET_PRODUCTS_REQUEST={
    type:"GET_PRODUCTS_REQUEST"
}
export const GET_PRODUCTS_SUCCESS=(data)=>{
    return {
     type:"GET_PRODUCTS_SUCCESS",
     payLoad:data
    }
 }
export const GET_PRODUCTS_FAILURE={
    type:"GET_PRODUCTS_FAILURE"
}