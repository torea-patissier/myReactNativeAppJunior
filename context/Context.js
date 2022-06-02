import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Inscription
   */
  const register = (firstname, lastname, email, password) => {

    setIsLoading(true);

    axios
      .post(`${BASE_URL}/api/users`, {
        firstname,
        lastname,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
