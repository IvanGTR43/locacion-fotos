import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import TopLocation from "../screens/TopLocation"

const Stack = createStackNavigator()

export default function TopLocationStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="topLocations"
                component={TopLocation}
                options={{ title:" Top Locaciones"}}
            />
        </Stack.Navigator>
    )
}