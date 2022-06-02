import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { globalStyle } from "../styles/AppStyles";
import { AuthContext } from "../context/Context";

const RegisterScreen = ({ navigation }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log('NAVIGATION REGISTER',navigation);
  // const {register,isLoading} = useContext(AuthContext);

  return (
    <View style={globalStyle.container}>
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
      />

      <TouchableOpacity
        style={globalStyle.boutonConfirmation}
        onPress={() => {
          register();
        }}
      >
        <Text style={globalStyle.textConfirmation}>Sign in</Text>
      </TouchableOpacity>

      <View style={globalStyle.lienTxt}>
        <Text>Already have an account? </Text>
        <TouchableOpacity
        onPress={() => {navigation.navigate("Login")}}
        >
          <Text style={globalStyle.lien}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default RegisterScreen;
