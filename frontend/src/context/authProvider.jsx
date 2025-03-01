import { createContext, useReducer } from "react";

 export const AuthContext=createContext()
 const getToken=()=>{
    const token =localStorage.getItem("token")||null
    return{
        token:token
    }
 }

 const initialState=getToken()
 const cartReducer=(state,action)=>{


    switch(action.type){
        case "LOGIN":{
            localStorage.setItem("token",action.payload.token)

            return{
                ...state,
                token:action.payload.token
            }
        }

        case "LOGOUT":{
            localStorage.removeItem("token")

            return{
                ...state,
                token:null
            }
        }


        default:{
            return state
        }
           
    }


 }

export const AuthProvider = ({children}) => {
   const [state,dispatch]= useReducer(cartReducer,initialState)
   //dispatch(17)
    return (
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )}