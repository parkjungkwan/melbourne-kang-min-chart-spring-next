import React , {useEffect, useState} from 'react'
import { NextPage } from 'next'
import { useAppDispatch, useAppSelector } from 'hooks'

import RemoveArticle from 'components/board/RemoveArticle'
import { removeRequest } from 'modules/board/removeArticle'

export interface RemoveArticle{
    title: string,
    content: string
}

const RemoveArticlePage: NextPage = () => {
    const[remove, setRemove] = useState<RemoveArticle>({
        title: '', content: ''
    })
    const dispatch = useAppDispatch()
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setRemove({...remove, [name]: value})
}
const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('진행 1: 삭제 버튼 클릭')
    alert(`진행 2 : 삭제할 글 정보 ${JSON.stringify(remove)}`)
    dispatch(removeRequest(remove))
    window.location.href = "../boards/allBoardList" 
  }

  return(
    <RemoveArticle onChange={onChange} onSubmit={onSubmit} board={undefined} title={''} content={''}/>
  )
  }
  export default RemoveArticlePage

    
  
