import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
// yarn add @redux-saga/is --dev , yarn add @types/redux, yarn add redux-saga

import { Earning, salesActions } from 'modules/slice/salesSlice';
import { salesApi } from 'modules/apis/salesApi';

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
            alert(`진행 3 : test 성공 `)
            const data: any = salesApi()
            console.log(' ###### ')
            console.log(data)
            put(salesActions.salesSuccess(data))
        }catch(error){
             console.log('3 saga내부 join 실패  ')
             put(salesActions.salesFailure(error))
        }
    })
}

