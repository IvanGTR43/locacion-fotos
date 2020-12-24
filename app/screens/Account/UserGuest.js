import React from 'react'
import { Button } from 'react-native'
import { View,Text, StyleSheet, ScrollView, Image } from 'react-native'

export default function UserGuest(){
    return(
        <ScrollView
            centerContent={true} style={StyleScroll.viewBody}>
            <Image
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={StyleScroll.image}/>
            <Text style={StyleScroll.text}>Consulta tu perfil de Location-Pictures</Text>
            <Text style={StyleScroll.description}>¿Cómo describirias un lugar perfecto para crear contenido? Busca y vizualiza las mejores locaciones
                de forma sencilla vota cual te ha gustado mas y comenta tu experiencie del sitio</Text>
            <View style={StyleScroll.view}>
                <Button
                    buttonStyle={StyleScroll.btnStyle}
                    containerStyle={StyleScroll.btnContainer}
                    title="Ver tu Perfil"
                    onPress={() => console.log("Boton Presionado")}/>
            </View>
        </ScrollView>
    )
}

const StyleScroll = StyleSheet.create({
    viewBody: {
        marginLeft:30,
        marginRigth: 30,
    },
    image:{
        height: 300,
        width: "100%",
        marginBottom: 40,
    },
    text:{
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
    },
    description:{
        textAlign: "center",
        marginBottom: 20,
    },
    view:{
        flex: 1,
        alignItems: "center",
    },
    btnStyle:{
        backgroundColor: "#00a680",
    },
    btnContainer:{
        width: "70%",
    }
})