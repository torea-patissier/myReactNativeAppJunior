import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyle } from "../styles/AppStyles";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  console.log('NAVIGATION LOGIN', navigation);

  return (
    <View style={globalStyle.container}>
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
        // onPress={() => {
        //   login(email, password);
        // }}
      >
        <Text style={globalStyle.textConfirmation}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
