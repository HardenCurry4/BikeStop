import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout, onUpsito } from "../store/slices/authslice";
import { frasesDespedida } from '../app/data/frasesDespedida';
import Bikeapi from "../api/Bikeapi";
import Swal from "sweetalert2";


export const useAuthStore = () => {
    const fraseAleatoria = frasesDespedida[Math.floor(Math.random() * frasesDespedida.length)];
    const { status, user, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async (correo, pw) => {
        try {
            const { data } = await Bikeapi.post("/auth", { correo, pw });
            localStorage.setItem("token", data.token);
            dispatch(onLogin({ uid: data.uid, nombre: data.nombre, codigo: data.codigo, correo: data.correo, ocu: data.ocu, rol: data.rol, ultima: data.ultima}))
        } catch (error) {
            const { response } = error;
            const { data } = response;
            const { msg } = data

            
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: msg,
                })
  
            
        }
    };


    const startRegister = async (nombre, codigo, correo, pw) => {
        try {
            const { data } = await Bikeapi.post("/auth/register", { nombre, codigo, correo, pw });
            localStorage.setItem("token", data.token);
            dispatch(onLogin({ uid: data.uid, nombre: data.nombre, codigo: data.codigo, correo: data.correo,  ocu: data.ocu, rol: data.rol, ultima: data.ultima}))
        } catch (error) {
            const { response } = error;
            const { data } = response;
            const { msg } = data;

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: msg,
            })
        }
    };

    const startLogout = () => {
        dispatch(onLogout())
        localStorage.clear();
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Sesion Cerrada',
            text: 'De nada y vuelva pronto',
            showConfirmButton: false,
            timer: 1500
        })
    };

    const tokensito = async () => {
        if (!localStorage.getItem("token")) {
            dispatch(onLogout());
            return;
        }
        try {
            const { data } = await Bikeapi.get("/auth/renew");
            localStorage.setItem("token", data.token);
            dispatch(onLogin({ uid: data.uid, nombre: data.nombre, correo: data.correo, codigo: data.codigo, ocu: data.ocu, rol: data.rol, ultima: data.ultima}))
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

    const UpdateName = async (nombre) => {
        try {
            const { data } = await Bikeapi.put("/upduser/updnombre", { nombre });
            const res = await Bikeapi.post("/auth/updateToken", { uid: user.uid, nombre: nombre, codigo: user.codigo, correo: user.correo, rol: user.rol, ocu: data.ocu });
            localStorage.setItem("token", res.data.token);

            dispatch(onUpsito({ ...user, nombre: nombre  }))

            dispatch(onLogin({ uid: user.uid, nombre: nombre, codigo: user.codigo, correo: user.correo, rol: user.rol, ocu: user.ocu }))

        } catch (error) {
            console.log(error)
        }
    };


    const UpdatePw = async (pw, pwupd) => {
        try {
            const { data } = await Bikeapi.put("/upduser/updpw", { pw, pwupd });
            const { msg } = data
            const res = await Bikeapi.post("/auth/updateToken", { uid: user.uid, nombre: user.nombre, codigo: user.codigo, correo: user.correo, rol: user.rol, ocu: data.ocu });
            localStorage.setItem("token", res.data.token);

            dispatch(onUpsito({ ...user }))

            dispatch(onLogin({ uid: user.uid, nombre: user.nombre, codigo: user.codigo, correo: user.correo, rol: user.rol, ocu: user.ocu }))

            Swal.fire({
                icon: 'success',
                title: 'Cambio!!!',
                text: msg,
            });


        } catch (error) {
            const { response } = error;
            const { data } = response;
            const { msg, ok } = data

            if (!ok) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: msg,
                });
            }
        }
    };


    const deleteUser = async (pw) => {
        try {
            await Bikeapi.put("/upduser/updel", { pw: pw });
            localStorage.clear();

            dispatch(onLogout())

            Swal.fire(
                'Eliminada!',
                fraseAleatoria,
                'success'
            );

        } catch (error) {
            const { response } = error;
            const { data } = response;
            const { msg } = data;

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: msg,
            });

        }
    };

    return { startLogin, startLogout, status, user, errorMessage, startRegister, tokensito, UpdateName, UpdatePw, deleteUser };
};