import { Article } from "modules/board/removeArticle";
import axios, {AxiosResponse} from 'axios';
const SERVER = 'http://127.0.0.1:8080'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const removeArticleApi = async (
    removeData: Article) => {
        try{
            console.log(`진행 4 : API 진입 + ${JSON.stringify(removeData)}`)
            await axios.post(`${SERVER}/articles/findAll`, removeData, {headers})
        } catch(error) {
            return error;
        }
    }