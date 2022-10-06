import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import Welcome from "../screens/Welcome";
import Contacts from "../screens/Contacts";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name ="Welcome" component={Welcome} />
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Contacts" component={Contacts} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;