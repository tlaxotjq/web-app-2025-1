import styled, { ThemeContext } from 'styled-components'
import IconButton from './IconButton.jsx'
import { db } from '../firebase.js'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserName from './UserName.jsx'
import React from 'react'

const StyledWrapper = styled.div`
    margin: 0px;
    padding: 4px 0;
    display: block;

    & > b {
        font-weight: 600;
        color: #555555;
        font-size: 16px;
    }
    &:hover {
    & > b { 
    color: #FFB938;
    }
    }
`

function UserItem(props){
    const {user, onClick} = props

    // post: 글 데이터, onClick: 클릭했을 때

    return (
        <StyledWrapper onClick={onClick}>
            <b>{user.name}</b>
        </StyledWrapper>
    )
}

export default UserItem

