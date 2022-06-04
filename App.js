import { StyleSheet, Text, View } from "react-native";
import Navigation from "./routes/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import React from 'react';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
