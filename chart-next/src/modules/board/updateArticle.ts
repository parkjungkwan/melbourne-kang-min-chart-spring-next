import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Article{
    title: string,
    content: string
}

export interface GetArticle{

}

export interface UpdateArticleState{
    data: Article[],
    status: 'successed' | 'loading' | 'failed'
    isArticleFetched: false,
    articleFetchError: null,
    isUpdated: false,
    updateError: null
}

const initialState: UpdateArticleState ={
    data: [],
    status: 'loading',
    isArticleFetched: false,
    articleFetchError: null,
    isUpdated: false,
    updateError: null
}

const UpdateArticleSlice = createSlice({
    name: 'updateArticleSlice',
    initialState,
    reducers: {
        updateRequest: (state, action: PayloadAction<Article>) =>{
            alert('진행 2 : 게시글 수정 액션 요청')
            const updateArticle = state.data.concat(action.payload)
            state.data = updateArticle
            console.log(`게시글 수정 데이터  ${JSON.stringify( state.data )}`)
            //state.push({data: action.payload, status: 'loading', error: null})
        },

        updateArticleSuccess: (state, action: PayloadAction) => {
            console.log('진행 2 : 게시글 수정 성공')
            state.status = 'successed'
    },
        updateArticleFailure: (state, action: PayloadAction) => {
            alert('진행 2 : 게시글 수정 실패')
            state.status = 'failed'
        },

        /*fetchArticles : (state) => {
            console.log('게시글 불러오기 - 리듀서')
            state.status = 'loading'
        },

        fetchArticleSuccess: (state, {payload}) => {
            const fetchArticle = state.data.concat(payload)
            state.data = fetchArticle
            state.status = 'successed'
            console.log(`게시글 불러오기 성공 - 리듀서 ${JSON.stringify( state.data )}`)
        },

        fetchArticleFailure: (state,{payload}) => {
            console.log('게시글 불러오기 실패 - 리듀서')
            state.updateError = payload;
            state.status = 'failed'
        },

        deleteArticle(state,action: PayloadAction){
            alert('게시글 삭제하기 - 리듀서')
        }*/
     }
})

export const {updateRequest,  updateArticleSuccess, updateArticleFailure } = UpdateArticleSlice.actions;
const {reducer, actions} = UpdateArticleSlice
export const UpdateArticleActions = actions
export default reducer;