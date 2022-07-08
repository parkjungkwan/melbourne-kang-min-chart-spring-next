import axios, {AxiosResponse} from "axios";
import { Earning } from "modules/slice/salesSlice";

const SERVER = 'http://localhost:8080'

export const salesApi = async () => {
        try{
            const response: AxiosResponse<unknown, Earning[]> =
                await axios.get(`${SERVER}/api/chart`)
            alert(`${JSON.stringify(response.data)}`)    
            return response.data
        }catch(err){
            return err;
        }
}
