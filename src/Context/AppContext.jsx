import React, { createContext } from "react"
import { useReducer } from "react";
import { reducer } from "./reducer";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const init={
        isAuth:false,
        token:null,
        isError:false,
        isLoading:false,
        data:[],
        isDataLoading:false
    }
    const [state,dispatch]=useReducer(reducer,init)

    return <AuthContext.Provider value={{state,dispatch}}>
        {children}
    </AuthContext.Provider>
}