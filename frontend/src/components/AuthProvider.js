import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [prodId, setProdId] = useState(null);  

  const login = (userData)=>{
    setUser(userData);
  };

  const newProdId = (id) =>{
    setProdId(id);
  }

  return (
    <AuthContext.Provider value={{ user, prodId, newProdId}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
