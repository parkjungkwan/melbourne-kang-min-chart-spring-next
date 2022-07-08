import React from 'react'
import { Typography, Button } from '@mui/material'
type Props = {
  onChange : (e : React.FormEvent<HTMLInputElement>) => void;
  onSubmit : (e: React.FormEvent<HTMLFormElement>) => void;

    board: any,
    articleId? : number,
    title: string,
    writtenDate? : string,
    open? : string,
    content: string,
    picture? : any,
    height? : string,
    weight? : string,
    comment? : string
}

const RemoveArticle: React.FC<Props> = ({onChange, onSubmit}) => {
    return (<form onSubmit={onSubmit}>
        
            <div style={{width:700 + "px", height:200 + "px", margin: '0 auto', paddingTop: 50 + "px"}}>
                <label><Typography style={{float:"left", display: "flex"}}> 삭제할 게시글 제목 </Typography></label>
                <input type="text" onChange={onChange}  id="title" name="title" placeholder="제목 입력" style={{width:700 + "px"}}/>
                <hr/>
                
                <br/><br/>
                <Button type="submit" variant="outlined" size="small" style={{float:"right", display: "flex"}}> 삭제 </Button>
            </div>
       
    </form>)
  }

export default RemoveArticle