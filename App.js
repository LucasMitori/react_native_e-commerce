import { AppRegistry, StyleSheet } from "react-native";
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import StackNavigator from "./navigation/StackNavigator";
import store from "./store";
import { UserContext } from "./UserContext";
import AuthProvider from "./context/AuthContext";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <UserContext>
            <StackNavigator />
            <ModalPortal />
          </UserContext>
        </Provider>
      </AuthProvider>
    </>
  );
}

AppRegistry.registerComponent("YourApp", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
