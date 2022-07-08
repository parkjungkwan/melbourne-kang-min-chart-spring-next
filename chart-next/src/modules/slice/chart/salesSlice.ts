import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Earning{
    year:string , sales:number, cost:number, profit:number
}
export interface SalesState {
    data: Earning[],
    status: 'idle' | 'loading' | 'succeeded' |'failed'
}
const initialState: SalesState = {
    data: [],
    status: 'idle'
}
export const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        salesRequest(state: SalesState) {
            alert(`진행 2 : salesRequest 성공 ${JSON.stringify(state)} `)
            state.status = 'loading';
        },
        salesSuccess(state: SalesState, { payload }) {
            alert(`진행 2 : salesSuccess 성공 ${JSON.stringify(state)} `)
            state.status = 'idle'
            state.data = [...state.data, payload]
        },
        salesFailure(state: SalesState, { payload }) {
            alert(`진행 2 : salesSuccess 실패 ${JSON.stringify(state)} `)
            state.status = 'failed'
            state.data = payload
        }
    }
    })
    export const { salesRequest, salesSuccess, salesFailure,
        } = salesSlice.actions;
    const {reducer, actions} = salesSlice
    export const salesActions = actions
    export default reducer;