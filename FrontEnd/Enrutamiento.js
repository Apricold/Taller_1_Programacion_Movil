import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ImageComponent from "./Components/ImageComponent";
import ModalComponent from "./Components/ModalComponent";
import CardComponent from "./Components/CardComponent";
import TableComponent from "./Components/TableComponent";
import AnimationComponent from "./Components/AnimationComponent";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Imagen"
        component={ImageComponent}
        options={{
          tabBarLabel: "Imagen",
          tabBarIcon: ({ color, size }) => (
            <Feather name="image" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Modal"
        component={ModalComponent}
        options={{
          tabBarLabel: "Modal",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="window-restore" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Tarjeta"
        component={CardComponent}
        options={{
          tabBarLabel: "Tarjeta",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cards" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Tabla"
        component={TableComponent}
        options={{
          tabBarLabel: "Tabla",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="table" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Animacion"
        component={AnimationComponent}
        options={{
          tabBarLabel: "Animacion",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="animation" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Enrutamiento() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
