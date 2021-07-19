import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookStack from "./books.routes";
import colors from "../styles/Colors";

const Tab = createBottomTabNavigator();

export default function HomeRoute() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.pink,
        inactiveBackgroundColor: colors.pink,
        activeTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Home"
        component={BookStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <FontAwesome5 name="book" size={20} color={colors.white} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}