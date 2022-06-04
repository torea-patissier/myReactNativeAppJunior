import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { globalStyle } from "../styles/AppStyles";
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);
  // console.log('NAVIGATION LOGIN', navigation);

  return (
    <View style={globalStyle.container}>
    <Spinner visible={isLoading} />
    <View style={globalStyle.container2}>
      <Text>Login form</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={globalStyle.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={globalStyle.input}
      />

      <TouchableOpacity
        style={globalStyle.boutonConfirmation}
        title="Login"
        onPress={() => {
          login(email, password);
        }}
      >
        <Text style={globalStyle.textConfirmation}>Log in</Text>
      </TouchableOpacity>

      <View style={globalStyle.lienTxt}>
        <Text>You don't have an account? </Text>
        <TouchableOpacity
        onPress={() => {navigation.replace("Register")}}
        >
          <Text style={globalStyle.lien}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

export default LoginScreen;
