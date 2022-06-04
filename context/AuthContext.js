import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useState} from 'react';
import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  /**
   * Inscription
   */
  const register = (firstname,lastname,email,password) => {

    setIsLoading(true);

    axios
      .post(`${BASE_URL}/api/users`, {
        firstname,
        lastname,
        email,
        password,
      })
      .then(res => {
        console.log(res);
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('REGISTER OK', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
        console.log(res.status);

      })
      .catch(e => {
        console.log(`REGISTER ERROR ${e}`);
        setIsLoading(false);
      });

  };

  const login = (email, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/authentication_token`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('LOGIN OK', JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`LOGIN ERROR ${e}`);
        setIsLoading(false);
      });
  };

  return (

    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        // splashLoading,
        register,
        login,
        // logout,
      }}>
      {children}
    </AuthContext.Provider>
    
  );
};
