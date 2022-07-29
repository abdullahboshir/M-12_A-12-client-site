import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext()

const AuthContextProvider = () => {
    
    const [username , setUsername] = useState('')

const details = 'Abdullah'
setUsername(details)


return (
    <AuthContext.Provider value={{details}}>
       username
    </AuthContext.Provider>
);
};
   

export default AuthContextProvider