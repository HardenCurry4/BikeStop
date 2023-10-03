import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../store/slices/authslice";
import Bikeapi from "../api/Bikeapi";
import Swal from "sweetalert2";


export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async (correo, pw) => {
        try {
            const { data } = await Bikeapi.post("/auth", { correo, pw});
            localStorage.setItem("token",data.token);
            dispatch(onLogin( { uid: data.uid, nombre: data.nombre, codigo:data.codigo, correo:data.correo, ocu: data.ocu} ))
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const startRegister = async (nombre, codigo, correo, pw) => {
        try {
            const { data } = await Bikeapi.post("/auth/register", {nombre, codigo, correo, pw});
            localStorage.setItem("token",data.token);
            dispatch(onLogin( { uid: data.uid, nombre: data.nombre, codigo:data.codigo, correo:data.correo, ocu: data.ocu} ))
        } catch (error) {
            console.log(error);
        }
    };

    const startLogout = () => {
        dispatch(onLogout())
        localStorage.clear();
    };

    const tokensito =async()=>{
        if(!localStorage.getItem("token")){
            dispatch(onLogout());
            return;
        }
        try {
            const { data }=await Bikeapi.get("/auth/renew");
            

            localStorage.setItem("token", data.token);
            dispatch(onLogin( { uid: data.uid, nombre: data.nombre, codigo:data.codigo, correo:data.correo, ocu: data.ocu, rol:data.rol} ))
        } catch (error) {
            localStorage.clear();
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Se te acabo el tiempo araña',
                showConfirmButton: false,
                timer: 1500
              })
            dispatch(onLogout("error en el token"));
        }
    };

    


    return { startLogin, startLogout, status, user, errorMessage, startRegister, tokensito };
};