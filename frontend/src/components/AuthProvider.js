import React, { createContext, useContext, useState} from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [prodId, setProdId] = useState(null); 
  const [cart, setCart] = useState([]); 

  const login = () =>{
    const storedUserId = Cookies.get('user_id');

    // console.log('stored user id from cookies', storedUserId);
    if (storedUserId) {
        setUserId(storedUserId);
    }
  }

  const newProdId = (id) =>{
    setProdId(id);
  }

  const addToCart = (title, price, image) => {
    const obj = { title, price, image };
    console.log(obj);
    setCart((prevCart) => [...prevCart, obj]);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const [category, setCategory] = useState([]);
  
  return (
    <AuthContext.Provider value={{ prodId, newProdId, addToCart, cart, searchTerm, setSearchTerm, userId, login, category, setCategory}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
