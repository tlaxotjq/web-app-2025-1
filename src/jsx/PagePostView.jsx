import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import TopNav from './NavTop.jsx'
import CommentList from './CommentList.jsx'
import PostContainer from './PostContainer.jsx'

import { db } from '../firebase.js'
import LeftNav from './NavLeft.jsx'

const StyledWrapper =styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0px;
`
const StyledContent =styled.div`
  flex: 1;
  padding-right: 20px;
`


function PostViewPage(props){
  const postId = useParams().id

  const [post, setPost] = useState({
    id: 0, comments: [], content: '', day: '',  
    daylabel : [ {fri:false}, {mon:false}, {none:true}, {satur:false}, {thurs:false}, {tues:false}, {wednes:false}], 
    subtitle: '', title: '',   writer: '1',  
  })
  
  useEffect(()=>{
    console.log("데이터 로드 시도");
    db.collection('post').doc(postId).get().then((doc)=>{
      setPost(doc.data())
      console.log("로드된 데이터:", post);
    })
  }, [])

  return (
    <div>
      <LeftNav></LeftNav>
      {post ? (
      <StyledWrapper>
      <StyledContent>      
      <TopNav pageTitle={post.subtitle || `${post.title|| "부제목이 없습니다."}`}></TopNav>
      <PostContainer post={post}></PostContainer>
      </StyledContent>
      <CommentList postId={postId}></CommentList>
      </StyledWrapper>) : (
      <p>Loading...</p>
    )}

    </div>
  )
}


export default PostViewPage



