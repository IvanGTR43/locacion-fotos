import React, {useState, useEffect} from 'react'
import * as firebase from "firebase"
import UserGuest from "./UserGuest"
import UserLogged from "./UserLogged"
import Loading from "../../components/Loading";
import { render } from 'react-dom';

export default function Account(){

    //esta constante es para poder obtener el estado de un objeto o de un virtual DOM, pasando como default null
    const [login, setlogin] = useState(null)
    //useEffect se usa para realizar alguna accion cuando se cambia de estado algun objeto o un nodo del visrual DOM
    useEffect(() =>{
        firebase.auth().onAuthStateChanged((user) =>{
            console.log(user)
            !user ? setlogin(false) : setlogin(true)
        })
    },[])

    if(login === null ) return <Loading isVisible={true} text="Cargando..." />
    return login ? <UserLogged /> : <UserGuest />
}