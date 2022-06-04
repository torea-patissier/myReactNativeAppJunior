import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { globalStyle } from "../styles/AppStyles";
import { AuthContext } from "../context/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';

const RegisterScreen = ({ navigation }) => {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log('NAVIGATION REGISTER',navigation);
  const myContext = useContext(AuthContext);

  return (
    <View style={globalStyle.container}>
      {/* <Spinner visible={isLoading} /> */}
    <View style={globalStyle.container2}>
      <Text>Register form</Text>
      {/* <Spinner visible={isLoading} /> */}
      <TextInput
        placeholder="Firstname"
        value={firstname}
        onChangeText={(text) => setFirstName(text)}
        style={globalStyle.input}
      />

      <TextInput
        placeholder="LastName"
        value={lastname}
        onChangeText={(text) => setLastName(text)}
        style={globalStyle.input}
      />

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
        secureTextEntry
      />

      <TouchableOpacity
        style={globalStyle.boutonConfirmation}
        onPress={() => {
          myContext.register(firstname,lastname,email,password)
        }}
      >
        <Text style={globalStyle.textConfirmation}>Sign in</Text>
      </TouchableOpacity>

      <View style={globalStyle.lienTxt}>
        <Text>Already have an account? </Text>
        <TouchableOpacity
        onPress={() => {navigation.replace("Login")}}
        >
          <Text style={globalStyle.lien}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

export default RegisterScreen;
