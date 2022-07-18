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
            console.log(`>>>>>>SalesRequest `)
            state.status = 'loading';
        },
        salesSuccess(state: SalesState, { payload }) {
            console.log(`>>>>>>SalesRequest${JSON.stringify(payload)} `)
            state.status = 'idle'
            state.data = [...state.data, payload]
        },
        salesFailure(state: SalesState, { payload }) {
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