/* eslint-disable react-hooks/rules-of-hooks */
import React , {useEffect, useState} from 'react'
import UpdateArticle from 'components/board/UpdateArticle'
import { useAppDispatch, useAppSelector } from 'hooks'
import { NextPage } from 'next'
//import {useRouter} from 'next/router'
import { updateRequest } from "modules/board/updateArticle";


export interface UpdateArticle {
    title: string,
    content: string
}

const updateArticlePage: NextPage = () => {


//const router = useRouter()
//const id = router.query


const [board, setBoard] = useState<UpdateArticle>({
title: '', content: ''})

const dispatch = useAppDispatch()






//const {article} = useSelector((state: { update: any }) => state.update);


//useEffect(() => {setBoard(article)}, [article])
// console.log("board : " + JSON.stringify(board))
// console.log("article : " + JSON.stringify(article))

const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setBoard({...board, [name]: value})
    console.log("board:"+JSON.stringify(board))
  }

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
        alert('진행 1: 수정 버튼 클릭')
        alert(`진행 2: 수정할 글 정보 : ${JSON.stringify(board)}`)
        dispatch(updateRequest(board))
        setBoard({title: '', content: ''})
        window.location.href = "../boards/allBoardList" 
}

return(
<UpdateArticle board={board} onChange={onChange} onSubmit={onSubmit} title={''} content={''} />
)
}
//const mapStateToProps = (state: { write: { isUpdated: any } }) => ({isUpdated: state.write.isUpdated})
const updateActions = {updateRequest}
export default updateArticlePage


