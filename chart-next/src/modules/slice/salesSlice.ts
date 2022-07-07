import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Earning{
    year:string , sales:string, cost:string, profit:string
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
            alert(`진행 2 : test 성공 `)
            state.status = 'loading';
        },
        salesSuccess(state: SalesState, { payload }) {
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