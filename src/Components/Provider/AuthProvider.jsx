import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const auth =getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] =useState(null)
    const [loading,setLoading] = useState(true)

    const createUser =(auth,email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn =(auth,email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password);
    }
    
    const logOut =(auth)=>{
        setLoading(true)
        return signOut(auth);
    }
    const googleProvider =new GoogleAuthProvider()
    const handleGoogleLogin =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile =(name,photo)=>{
        return updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
            console.log('logged in user inside the auth state observer', loggedUser)
            setUser(loggedUser)
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        handleGoogleLogin,
        updateUserProfile
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;