import axios, {AxiosResponse} from "axios";
import { Earning } from "modules/slice/chart/salesSlice";

const SERVER = 'http://localhost:8080'

export const salesApi = async () => {
        try{
            const response: AxiosResponse<unknown, Earning[]> =
                await axios.get(`${SERVER}/api/chart`)
            console.log(`>>>>>>API: ${JSON.stringify(response.data)}`)    
            return response.data
        }catch(err){
            return err;
        }
}
