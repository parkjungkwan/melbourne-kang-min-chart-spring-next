import { AnyAction, CombinedState, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import salesReducer,{ SalesState } from "./slice/chart/salesSlice";
import rootSaga from "./sagas";
import articleReducer, {ArticleState} from 'modules/board/readArticle'
const sagaMiddleware = createSagaMiddleware()
const isDev = process.env.NODE_ENV === 'development'
interface RootStates {
    sales: SalesState;
    article: ArticleState;
}
const rootReducer:any = (
    state: RootStates,
    action: AnyAction
): CombinedState<RootState> => {
    if(action.type === HYDRATE) {
        return{
            ...state, ...action.payload
        }
    }
    return combineReducers({
        sales: salesReducer,
        article: articleReducer
    })(state,action)
}
const makestore = () => {
    const store = configureStore({
        reducer: { rootReducer },
        middleware: getDefaultMiddleware =>
            isDev ? getDefaultMiddleware().concat(logger, sagaMiddleware) : getDefaultMiddleware(),
        devTools: isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}
export const wrapper = createWrapper(makestore, {
    debug: isDev
}) ;
const store = makestore();
export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;