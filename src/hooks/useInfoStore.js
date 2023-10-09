import { useDispatch, useSelector } from "react-redux";
import Bikeapi from "../api/Bikeapi";
import { onInfoH, onInfoM } from "../store/slices/infoslice";

export const useInfoStore = () => {
    const { infoM, infoH, errorMessage } = useSelector((state) => state.info);
    const dispatch = useDispatch();

    const startInfoM = async () => {
        try {
            const { data } = await Bikeapi.get("/reports/meses");
            dispatch(onInfoM( data ))
        } catch (error) {
            console.log(error)
        }
    };

    const startInfoH = async () => {
        try {
            const { data } = await Bikeapi.get("/reports/horas");
            dispatch(onInfoH( data ))
            
        } catch (error) {
            console.log(error)
        }
    };

    

  return { startInfoM, startInfoH, infoM, infoH, errorMessage }
}
