import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
// yarn add @redux-saga/is --dev , yarn add @types/redux, yarn add redux-saga

import { Earning, salesActions } from 'modules/slice/chart/salesSlice';
import { salesApi } from 'modules/apis/chart/salesApi';

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
    
    yield takeLatest(salesActions.salesRequest, (sales:any) => {
        try {
            const data: any = salesApi()
            console.log(`>>>>>>saga: ${JSON.stringify(data)}`)
            put(salesActions.salesSuccess(data))
        }catch(error){
             console.log(' saga내부 실패  ')
             put(salesActions.salesFailure(error))
        }
    })
}

