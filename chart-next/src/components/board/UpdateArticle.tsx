import { Typography, Button } from '@mui/material'
import React from 'react'



type Props = {
    onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
    onSubmit : (e: React.FormEvent<HTMLFormElement> ) => void

    board: any,
    articleId? : string,
    title: string,
    writtenDate? : string,
    open? : string,
    content: string,
    picture? : any,
    height? : string,
    weight? : string,
    comment? : string
  }

  const UpdateArticle: React.FC<Props> = ({board, onChange, onSubmit}) => {
    return (<form onSubmit={onSubmit}>
        
            <div style={{width:700 + "px", height:200 + "px", margin: '0 auto', paddingTop: 50 + "px"}}>
                <label><Typography style={{float:"left", display: "flex"}}> 수정할 게시글 제목 </Typography></label>
                <input type="text" onChange={onChange} defaultValue={board.title||""}  id="title" name="title" placeholder="제목 입력" style={{width:700 + "px"}}/>
                <hr/>
                <input type="textarea" onChange={onChange} defaultValue={board.content||""}  id="content" name="content" placeholder="내용 입력" style={{width:700 + "px", height:200 + "px"}}></input>
                <br/><br/>
                <Button type="submit" variant="outlined" size="small" style={{float:"right", display: "flex"}}> 수정 </Button>
            </div>
       
    </form>)
  }

  export default UpdateArticle