import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/Context/UserContext";
import { FirebaseProvider } from "./src/Context/FirebaseContext";
import AppStackScreens from "./src/stacks/AppStackScreens";
export default App = () => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <NavigationContainer>
          <AppStackScreens />
        </NavigationContainer>
      </UserProvider>
    </FirebaseProvider>
  );
};
