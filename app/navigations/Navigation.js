import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs" //aqui se importe el bottomtab(botones de abajo)
import {Icon} from "react-native-elements";
//import de Navigatios
import LocationStack from "./LocationStack"
import FavoritesStack from "./FavoritesStack"
import AccountStack from './AccountStack'
import SearchStack from './SearchStack'
import TopLocationStack from './TopLocationStack'
//objeto del BottomTab Navigator Primero de COntenedor de todos y despues las screen que contienen las Stacks
//Un Stack es un elemento del layout
const Tab = createBottomTabNavigator()

export default function Navigation(){
    //NavigationContainer es el contorno de todos los botones de abajo,el tabNavigator es el gupo de botones, los Tab.Screen son los elemento(botones o apartados) del bottonTab
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName="locations"
                tabBarOptions={{
                    inactiveTintColor: "#646464",
                    activeTintColor:"#00a680"
                }}
                screenOptions={({route}) => ({
                    tabBarIcon: ({color}) => screenOptions(route, color),
                })}>
                <Tab.Screen name="locations" component={LocationStack} options={{ title:"Locaciones"}}></Tab.Screen>
                <Tab.Screen name="favorites" component={FavoritesStack} options={{ title:"Favoritos"}}></Tab.Screen>
                <Tab.Screen name="search" component={SearchStack} options={{ title:"Buscador"}}></Tab.Screen>
                <Tab.Screen name="account" component={AccountStack} options={{ title:"Cuenta"}} />
                <Tab.Screen name="topLocations" component={TopLocationStack} options={{ title:"Top Locaciones "}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color){
    let iconName
    switch (route.name) {
        case "locations":
            iconName="map-marker"
            break;
        case "account":
            iconName="home-outline"
            break
        case "favorites":
            iconName="heart-outline"
            break
        case "topLocations":
            iconName="star-outline"
            break
        case "search":
            iconName="magnify"
            break
    }
    return(
        <Icon type="material-community" name={iconName} size={22} color={color}/>
    )
}