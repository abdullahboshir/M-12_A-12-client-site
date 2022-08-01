import React, { createContext, useContext, useEffect, useState } from 'react';
const authContext = createContext()



export const AuthContextProvider = ({children}) => {
    
    

    return (
        <authContext.Provider>
            {children}
        </authContext.Provider>
    );
};




export const useAuthContext = ()=>{
    return useContext(authContext)
}
