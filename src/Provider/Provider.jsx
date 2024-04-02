import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Auth from "../Firebase/firebase.config";


export const AuthContext =createContext(null);

const Provider = ({children}) => {

const[loading,setLoading] = useState(true)

    const [name,setName] = useState("")
const [user,setUser] =useState(null)
const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(Auth,email,password)
   }
    const signInUser =(email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        signOut(Auth).then((console.log("logout complite"))).catch(err => console.log(err.message))
    }


    
useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth,CurrentUser=>{
        console.log("this is " , CurrentUser)
     setUser(CurrentUser)
     setLoading(false)
    });
   
     return () => {
      unSubscribe()
     }
   }, [])





    const contextInfo = {user,createUser,signInUser,logOut,setUser,name,setName,loading}





  



    return (
       <AuthContext.Provider value={contextInfo}>
{children}
       </AuthContext.Provider>
    );
};

Provider.propTypes = {
    children:PropTypes.node,
}

export default Provider;