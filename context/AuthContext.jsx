import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*-------------------- Skip line --------------------*/

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("Main");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid Email");
        console.log(error);
      });
  };

  /*-------------------- Skip line --------------------*/

  /*-------------------- Skip line --------------------*/

  /*-------------------- Skip line --------------------*/

  return (
    <>
      <AuthContext.Provider
        value={{
          email,
          password,
          setEmail,
          setPassword,
          handleLogin,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
