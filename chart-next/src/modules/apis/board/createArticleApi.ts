import { Article } from "modules/board/readArticle";
import axios, { AxiosResponse } from "axios";
const SERVER = 'http://127.0.0.1:8080'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}
export const writeArticleApi = async (
    writeData: Article) => {
        try {
            console.log(` : API 진입 + ${JSON.stringify(writeData)}`)
            await axios.post(`${SERVER}/articles/join`, writeData, {headers})
        } catch (err) {
            return err;
        }
    }
export const fetchArticleAPI = async () => {
    try{
        //console.log(`API 진입`)
        const response : any = await axios.get<Article[]>(`${SERVER}/articles/findAll`)
        console.log('response 타입: '+typeof(response.data))
        let arr = []
        for(var i = 0; i < 2; i += 1) {
            console.log('i값: '+i)
            arr.push(response.data[i])
        }
        console.log(`서버 응답 + ${JSON.stringify(arr)}`)
        console.log('arr 타입: '+typeof(arr))
        /**
        [
        {"articleId":1001,"title":"234234","writtenDate":null,"open":null,"content":"423432423","picture":null,"height":"234234","weight":"23423","comment":null},
        {"articleId":1002,"title":"테스트","writtenDate":null,"open":null,"content":"게시물","picture":null,"height":"170","weight":"60","comment":null}
    ]
         */
        let articles: Array<Article> = [
            {"articleId":1001,"title":"234234","writtenDate":"2022","open":"2022","content":"423432423","picture":null,"height":"234234","weight":"23423","comment":"test"},
            {"articleId":1002,"title":"테스트","writtenDate":"2022","open":"2022","content":"게시물","picture":null,"height":"170","weight":"60","comment":"test"}
          ];
        console.log('articles prototype 타입: '+Object.prototype.toString.call(articles))
        return articles
    } catch(err) {
        return err;
    }
}