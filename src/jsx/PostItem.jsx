import styled, { ThemeContext } from 'styled-components'
import IconButton from './IconButton.jsx'
import UserName from './UserName.jsx'
import React from 'react'

const StyledWrapper = styled.div`
    margin: 0px;
    padding: 12px;
    display: block;
    border-bottom: 1px solid #aaaaaa;
`

const StyledTitle = styled.p`
    padding: 0px;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 16px;
    margin-top: 8px;
`

const StyledUser = styled.div`
    margin: 0px;
    padding: 0px;
    font-weight: 400;
    font-size: 18px;
`

const Styledinfo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    color: #666666;
`

function PostItem(props){
    const {post, onClick} = props

    // post: 글 데이터, onClick: 클릭했을 때

    return (
        <StyledWrapper onClick={onClick}>
            <StyledUser><UserName userId={post.writer}/>님의 게시물입니다.</StyledUser>
            <StyledTitle>{post.title}</StyledTitle>
            <Styledinfo><IconButton iconLink="fa-regular fa-heart"></IconButton> <IconButton iconLink="fa-regular fa-comment-dots"></IconButton>작성일자 | {post.formattedDate}</Styledinfo>
        </StyledWrapper>
    )
}

export default PostItem

