
import { updateArticleApi } from "modules/apis/board/updateArticleApi";
import { Article, UpdateArticleActions, updateRequest, updateArticleFailure, updateArticleSuccess, } from "modules/board/updateArticle";
import { AxiosResponse } from "axios";
import { Action } from "redux";
import { call, put, take, takeLatest, throttle } from "redux-saga/effects";

export function* updateArticleSaga(action : {payload: Article}){
    const param = action.payload
    try{
        alert(`진행 3 :  saga 내부 update 성공 + ${JSON.stringify(param)}`)
        yield call(updateArticleApi, param)
        yield put(updateArticleSuccess())
    } catch (error) {
        yield put(updateArticleFailure())
    }
}



export function* watchUpdateArticle(){
    yield takeLatest(UpdateArticleActions.updateRequest,updateArticleSaga)
}


