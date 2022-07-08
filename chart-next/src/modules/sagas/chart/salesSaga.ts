import { call, delay, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects'
// yarn add @redux-saga/is --dev , yarn add @types/redux, yarn add redux-saga

import { salesActions } from 'modules/slice/chart/salesSlice';
import { salesApi } from 'modules/apis/chart/salesApi';
import convertChart from 'hooks/convertChart';

interface salesType{
    type: string;
    payload: {
        year:string , sales:number, cost:number, profit:number
    }
}
interface salesSuccessType{
    type: string;
    payload: {
        year:string , sales:number, cost:number, profit:number
    }
}

export function* watchSales(){
    
    yield takeEvery(salesActions.salesRequest, () => {
        try {
            alert(`진행 3 : salesSaga ${JSON.stringify(salesApi())} `)
            const data= salesApi()
            console.log(' ###### ')
            console.log(data )
            const data2 = convertChart(data)
            put(salesActions.salesSuccess(data2))
        }catch(error){
             console.log('3 saga내부 join 실패  ')
             put(salesActions.salesFailure(error))
        }
    })
}

