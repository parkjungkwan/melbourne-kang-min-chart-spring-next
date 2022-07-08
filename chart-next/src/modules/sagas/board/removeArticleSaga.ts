import {removeArticleApi} from "modules/apis/board/removeArticleApi";
import { Article, RemoveArticleActions, removeRequest, removeArticleFailure, removeArticleSuccess, } from "modules/board/removeArticle";

import { AxiosResponse } from "axios";
import { Action } from "redux";
import { call, put, takeLatest, throttle } from "redux-saga/effects";

function* removeArticleSaga(action : {payload: Article}){
    const param = action.payload
    try{
        alert(`진행 3 :  saga 내부 update 성공 + ${JSON.stringify(param)}`)
        yield call(removeArticleApi, param)
        yield put(removeArticleSuccess())
    } catch (error) {
        yield put(removeArticleFailure())
    }
}



export function* watchRemoveArticle(){
    yield takeLatest(RemoveArticleActions.removeRequest,removeArticleSaga)
}