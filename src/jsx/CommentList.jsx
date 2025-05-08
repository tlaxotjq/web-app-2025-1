import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { db } from '../firebase.js'
import CommentItem from './CommentItem.jsx'
import TextInput from './TextInput.jsx'
import Button from './Button.jsx'
import { useUserContext } from "../userContext.jsx";
import UserName from './UserName.jsx'
import UserImg from './UserImg.jsx'
const StyledWrapper = styled.div`
  background-color: #ffffff;
  width: 320px;
  height: 100vh;
  border-left: 1px solid #222222;
`

const StyledList = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 24px;
`
const StyledPorfile = styled.div`

  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  width: calc(100% - 20px);
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
  const {postId} = props
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
      setData(filterdData);
    });
  };

  useEffect(() => {
      fetchComments();
    }, []);

  const listCM = data.map((comments, index)=>{
    return <CommentItem key={comments.id} comments={comments} onClick={(e)=>itemClicked(post)}></CommentItem>
  })

  const writeComment = () => {
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
    })
  }

  return ( 
    <StyledWrapper>
      <StyledPorfile><div><StyledImg><UserImg userId={userId}></UserImg></StyledImg><h1><UserName userId={userId}></UserName>님</h1></div><Button title={"댓글작성"} onClick={writeComment}></Button></StyledPorfile>
      <StyledList><TextInput height="20" title={"댓글을 입력하세요."}value={comment} onChange={(e)=>{setComment(e.target.value)}}></TextInput>
      {listCM}
      </StyledList>
    </StyledWrapper>
    ) 
}

export default CommentList