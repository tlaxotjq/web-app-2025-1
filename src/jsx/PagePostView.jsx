import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import TopNav from './NavTop.jsx'
import CommentList from './CommentList.jsx'
import PostContainer from './PostContainer.jsx'

import { db } from '../firebase.js'
import LeftNav from './NavLeft.jsx'

const StyledWrapper =styled.div`
  position: relative;
  display: flex;
  width: calc(100% - 240px);
  flex-direction: row;
  justify-content: space-between;
  gap: 0px;
`
const StyledContent =styled.div`
  box-sizing: border-box;
  padding: 20px 0 60px 0 ;
  margin: 0;
  margin-top: 80px;
  position: fixed;
  dispaly: felx;
  justify-content: center;
  width:  calc(100vw - 460px); 
  max-height: calc(100% - 100px);
  overflow: scroll;
`

function PostViewPage(props){
  const postId = useParams().id

  const [post, setPost] = useState({
    id: 0, comments: [], content: '', day: '',  
    daylabel : [ {fri:false}, {mon:false}, {none:true}, {satur:false}, {thurs:false}, {tues:false}, {wednes:false}], 
    subtitle: '', title: '',   writer: '1',  
  })
  
  useEffect(()=>{
    db.collection('post').doc(postId).get().then((doc)=>{
      setPost(doc.data())
    })
  }, [])

  const commentInputRef = useRef(null);

  const focusCommentInput = () => {
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  };

  return (
    <div>
      <LeftNav></LeftNav>
      {post ? (
      <StyledWrapper>
      <TopNav pageTitle={post.subtitle || `${post.title|| "부제목이 없습니다."}`} marginRight="360px"></TopNav>
      <StyledContent>      
      <PostContainer post={post} onButtonClick={focusCommentInput}></PostContainer>
      </StyledContent>
      <CommentList postId={postId} inputRef={commentInputRef}></CommentList>
      </StyledWrapper>) : (
      <p>Loading...</p>
    )}

    </div>
  )
}


export default PostViewPage



