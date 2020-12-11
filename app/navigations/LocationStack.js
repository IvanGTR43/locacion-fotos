import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Locations from '../screens/Locations'

const Stack = createStackNavigator()

export default function LocationStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="locations"
                component={Locations}
                options={{ title: "Locaciones"}}
            />
            <Stack.Screen
                name="Formulario"
                component={Locations}
                options={{ title: "Añadir Locaciones"}}
            />
        </Stack.Navigator>
    )
}
