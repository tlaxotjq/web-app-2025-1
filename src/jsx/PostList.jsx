import styled from 'styled-components'
import PostItem from './PostItem.jsx'
import { useState } from 'react'
const StyledWrapper =styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px
`


function PostList(props){
  const {posts, itemClicked} = props

   
  const list = posts.map((post, index)=>{
    return <PostItem key={post.id} post={post} onClick={(e)=>itemClicked(post)}></PostItem>
  })

  return (
    <StyledWrapper>
      {list}
    </StyledWrapper>
  )
}

export default PostList