import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Article{
    title: string,
    content: string
}

export interface GetArticle{

}

export interface RemoveArticleState{
    data: Article[],
    status: 'successed' | 'loading' | 'failed'
    isArticleFetched: false,
    articleFetchError: null,
    isUpdated: false,
    updateError: null
}

const initialState: RemoveArticleState = {
    data: [],
    status: 'loading',
    isArticleFetched: false,
    articleFetchError: null,
    isUpdated: false,
    updateError: null
}

const RemoveArticleSlice = createSlice({
    name: 'removeArticleSlice',
    initialState,
    reducers: {
       removeRequest: (state, action: PayloadAction<Article>) =>{
            alert('게시글 삭제 액션 요청')
            const removeArticle = state.data.concat(action.payload)
            state.data = removeArticle
            console.log(`게시글 삭제 성공 - 리듀서 ${JSON.stringify( state.data )}`)
            //state.push({data: action.payload, status: 'loading', error: null})
        },

        removeArticleSuccess: (state, action: PayloadAction) => {
            state.status = 'successed'
    },
        removeArticleFailure: (state, action: PayloadAction) => {
            alert('게시글 삭제 실패')
            state.status = 'failed'
        }
    }

})
   


export const {removeRequest, removeArticleSuccess, removeArticleFailure } = RemoveArticleSlice.actions;
const {reducer, actions} = RemoveArticleSlice
export const RemoveArticleActions = actions
export default reducer;