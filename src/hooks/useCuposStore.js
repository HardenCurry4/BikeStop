import { useDispatch, useSelector } from "react-redux";
import { onUpDateCupitos } from "../store/slices/cuposSlice";
import { onUpsito } from "../store/slices/authslice";
import { useAuthStore } from '../hooks/useAuthStore'
import Bikeapi from "../api/Bikeapi";
import Swal from "sweetalert2";


export const useCuposStore = () => {
    const { total, ocupado, disponible } = useSelector((state) => state.cupos);
    const dispatch = useDispatch();
    const { user } = useAuthStore();

    const traerDatos = async () => {
        try {
            const { data } = await Bikeapi.get("/bicip");
            dispatch(onUpDateCupitos({total: data.bicip.total, ocupado: data.bicip.ocupado, disponible: data.bicip.disponible}))
        } catch (error) {
            console.log(error);
        }
    };

    const reservar = async () => {
        try {
            const { data } = await Bikeapi.patch("/bicip/reserva");
            const res = await Bikeapi.post("/auth/updateToken",{uid: user.uid, nombre: user.nombre, codigo:user.codigo,correo: user.correo, rol: user.rol});
            localStorage.setItem("token", res.data.token);
            dispatch(onUpsito({...user, ocu: data.ocu, ultima: res.data.ultima}))
            


            Swal.fire({
                icon: 'success',
                title: 'Genial!!!',
                text: 'Ahora tiene un estacionamiento',
            })
            
        } catch (error) {
            console.log(error);
        }


    };

    const entregar = async () => {
        try {
            const { data } = await Bikeapi.put("/bicip/entrega");
            const { msg } = data
            const res = await Bikeapi.post("/auth/updateToken",{ uid: user.uid, nombre: user.nombre, codigo:user.codigo,correo: user.correo, rol: user.rol , ocu: null});
            localStorage.setItem("token", res.data.token);

            dispatch(onUpsito({...user, ocu: null}))

            Swal.fire({
                icon: 'success',
                title: 'Gracias',
                text: msg,
            })
            
        } catch (error) {
            console.log(error);
        }


    };


    return {traerDatos, total, ocupado, disponible, reservar, entregar}
};
