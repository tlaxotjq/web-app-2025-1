import { useRef, useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import { db } from '../firebase.js'

const StyledImg = styled.img`
height: 100%;
`

function UserImg(props){
  const userId = (String(props.userId));
  
  const [user, setUser] = useState({
    id: 0, name: '오류'
  })

  useEffect(()=>{
    db.collection('user').doc(userId).get().then((doc)=>{
    setUser(doc.data());
  }) }, [userId])

if (!user) {
    return <div></div>;  
  }

  return <StyledImg src={user.img}></StyledImg>;
}

export default UserImg