import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../websitelist-app/src/components/screens/HomeScreen";
import WebViewScreen from "../websitelist-app/src/components/screens/WebViewScreen";
import { RootStackParamList } from "../websitelist-app/src/components/types/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Listado de Sitios" }}
        />
        <Stack.Screen
          name="WebView"
          component={WebViewScreen}
          options={({ route }) => ({
            title: route.params.title || "Sitio web",
            headerShown: true, 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
