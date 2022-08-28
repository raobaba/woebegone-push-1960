
export const reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_REQUEST" :
        console.log("Login req")
        return state;
       case "LOGIN_SUCCESS" :
        
        return{...state,isAuth:true,token:action.payLoad}

       case "LOGIN_FAILURE" :
        return state;

    case "GET_PRODUCTS_REQUEST" :
        return state;

      case "GET_PRODUCTS_SUCCESS" :
        return {...state,data:action.payLoad.data};

      case "GET_PRODUCTS_FAILURE" :
        return state;
        default:
        return state;
    }
  
}