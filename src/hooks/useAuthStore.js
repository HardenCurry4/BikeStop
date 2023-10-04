import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout, onUpsito } from "../store/slices/authslice";
import Bikeapi from "../api/Bikeapi";
import Swal from "sweetalert2";


export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async (correo, pw) => {
        try {
            const { data } = await Bikeapi.post("/auth", {correo, pw });
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

    const UpdateName = async ( nombre ) => {
        try {
            const { data } = await Bikeapi.put("/upduser/updnombre", { nombre });
            const res = await Bikeapi.post("/auth/updateToken",{uid: user.uid, nombre: nombre, codigo:user.codigo,correo: user.correo, rol: user.rol, ocu: data.ocu});
            localStorage.setItem("token", res.data.token);

            dispatch(onUpsito({...user, nombre: nombre}))

            dispatch(onLogin( { uid: user.uid, nombre: nombre, codigo: user.codigo, correo: user.correo, ocu: user.ocu} ))
            
        } catch (error) {
            console.log(error);
        }
    };


    const UpdatePw = async ( pw, pwupd ) => {
        try {
            const { data } = await Bikeapi.put("/upduser/updpw", { pw, pwupd });
            const res = await Bikeapi.post("/auth/updateToken",{uid: user.uid, nombre: nombre, codigo:user.codigo,correo: user.correo, rol: user.rol, ocu: data.ocu});
            localStorage.setItem("token", res.data.token);

            dispatch(onUpsito({...user}))

            dispatch(onLogin( { uid: user.uid, nombre: nombre, codigo: user.codigo, correo: user.correo, ocu: user.ocu} ))
            
        } catch (error) {
            console.log(error);
        }
    };
    
    
    

    return { startLogin, startLogout, status, user, errorMessage, startRegister, tokensito, UpdateName, UpdatePw };
};