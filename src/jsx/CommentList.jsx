import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { db } from '../firebase.js'
import CommentItem from './CommentItem.jsx'
import TextInput from './TextInput.jsx'
import Button from './Button.jsx'
import { useUserContext } from "../userContext.jsx";
import UserName from './UserName.jsx'
import UserImg from './UserImg.jsx'
import CommentLength from './CommentLength.jsx'

const StyleFixed = styled.div`
  position: fixed;
  right: 0;
  z-index: 3;
`
const StyledWrapper = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 320px;
  height: 100vh;
  border-left: 1px solid #222222;
  padding: 0px 20px;

`

const StyledList = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: calc(100vh - 280px);
  overflow: scroll;
  
`
const StyledPorfile = styled.div`
  margin-left: -20px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #222222;
  & > div {
  display: flex;
  gap: 12px;
  align-items: center;
  }
  & > div > h1{
  font-size: 20px;
  font-weight: 600;
  color: #FFB938;
  }
`
const StyledImg = styled.div`
width: 48px;
height: 48px;
overflow: hidden;
border-radius: 24px;
display: flex;
justify-content: center;
align-items: center;
`

function CommentList(props){
  const { postId, inputRef } = props;
  const { userId } = useUserContext('1');
  const [comment, setComment] = useState('')

  const [data, setData] = useState([])

  const [formattedDate, setFormattedDate] = useState('')
    
      useEffect(() => {
        const currentDate = new Date()
        const year = currentDate.getFullYear()
        const month = String(currentDate.getMonth() + 1).padStart(2, '0')
        const day = String(currentDate.getDate()).padStart(2, '0')

        setFormattedDate(`${year}.${month}.${day} 작성`)
      }, [])
      
  const fetchComments = () => {
    let tempData = [];
    db.collection('comments').get().then(function (qs) {
      qs.forEach(function (doc) {
        tempData.push(doc.data());
      });
      const filterdData = tempData.filter((comments)=> comments.post == postId) 
      const sortData = filterdData.sort((a,b) => b.id -  a.id)
      setData(sortData);
    });
  };

  useEffect(() => {
      fetchComments();
    }, []);

  const listCM = data.map((comments, index)=>{
    return <CommentItem key={comments.id} comments={comments} onClick={(e)=>itemClicked(post)}></CommentItem>
  })

  const writeComment = () => {
    if(!comment){    
      alert('댓글을 입력해주세요.')
    }else {
    let timestampCM = new Date().getTime().toString()

    db.collection('comments').doc(postId + "CM" + timestampCM).set({
      post: postId,
      time: formattedDate,
      id: timestampCM,
      writer: userId,
      comment: comment,
    }).then(()=>{
      alert('댓글이 등록되었습니다!')
      setComment('');
      fetchComments();
    })}
  }

  return ( 
    <StyleFixed>
    <StyledWrapper>
      
      <StyledPorfile>
        <div><StyledImg><UserImg userId={userId}></UserImg></StyledImg><h1><UserName userId={userId}></UserName>님</h1></div>
        <Button title={"댓글작성"} onClick={writeComment}></Button></StyledPorfile>

      <TextInput ref={inputRef} max_height="80" height="20" title={"댓글을 입력하세요."}value={comment} onChange={(e)=>{setComment(e.target.value)}}></TextInput>
      <TextInput title={<>
      댓글  <CommentLength postId={postId} /> 개
    </>} type="."></TextInput>
      <StyledList>
      {listCM}
      </StyledList>
    </StyledWrapper>
    </StyleFixed>
    ) 
}

export default CommentList