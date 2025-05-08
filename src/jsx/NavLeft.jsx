import LeftNavIcon from "./NavLeftIcon.jsx";
import styled from 'styled-components';
import React, { useContext, useState, useEffect } from "react";
import UserList from "./UserList.jsx";
import { db } from "../firebase.js";
import UserName from "./UserName.jsx";
import { useUserContext } from "../userContext.jsx";
import { useNavigate } from 'react-router-dom'
import UserImg from "./UserImg.jsx";
const StyledWrapper = styled.div`
  width: 60px;
  height: 100vh;
  position: fixed;
  left: 0;
  background-color: #ffffff;
  border-right: 1px solid #222222;
  z-index: 2;
`
const BlogLogo = styled.button`
  background: none; 
  border: none;
  width: 60px;
  height: 61px;
  border-bottom: 1px solid #222222;
  display: grid;
  place-items: center;
  text-align: center;
  
  & > div { 
  width: 40px;
  height: 40px;
  background-color: #FFB938;
  border-radius: 50%;
  display: grid;
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  place-items: center;
  }
`
const IconArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 100px);
  padding: 20px 0px;

`
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 28px;
`
const ProfileImage = styled.div`
  background-color: #eeeeee;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  z-index: 2;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`
const UserInfo = styled.div`
  font-size: 12px;
  position: fixed;
  display: flex;
  bottom:81px;
  left: 0px;
  min-width: 200px;
  transition: all 0.3s ease;
  color: #444444;
  align-items: flex-end;
  font-size: 12px;
  font-weight: 300;
`
const Usernow = styled.div`
  margin-left: 4px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #f8f8f8;

`
const Userbox = styled.div`
  border-radius: 8px;
  padding: 12px 32px 0 32px;
  margin-left: -26px;

  background-color: #f8f8f8;

  & > p {

font-weight: 500;
  
  & > b {
  font-size: 18px;
  }}
`

function LeftNav(props){
    const navigate = useNavigate()
  const { user, onClick} = props
  const { userId, setUserId } = useUserContext();

  const [userData, setUserData] = useState([])
  useEffect(()=>{
    let tempData = []
    db.collection('user').get().then(function(qs){
      qs.forEach(function(doc){
          tempData.push(doc.data())
      })
      setUserData(tempData)
      })
  }, [])
  
  const [sellectUser, setSellectUser] = useState(false);

  const sellectToggle = ()=>{
    setSellectUser(!sellectUser);
  }

  return ( 
    <StyledWrapper>
      <BlogLogo onClick={(e)=>navigate('/')} >
        <div>B</div>
      </BlogLogo>
      <IconArea>
      <IconBox>
      <LeftNavIcon iconLink="fa-solid fa-house" onClick={(e)=>navigate('/')}></LeftNavIcon>
      <LeftNavIcon iconLink="fa-solid fa-user-group" onClick={sellectToggle}></LeftNavIcon>
      <LeftNavIcon iconLink="fa-solid fa-bell"></LeftNavIcon>
      </IconBox>
      <IconBox>

      {sellectUser && <UserInfo>
      <Usernow></Usernow>
      <Userbox>
        다른 사용자로 로그인
        <UserList users={userData} itemClicked={(user)=>{setUserId(`${user.id}`)}}></UserList>
        <p>현재 로그인 계정<br></br> <b>{userId && <UserName userId={userId}></UserName>}</b></p>
      </Userbox>
      </UserInfo>}

      <ProfileImage onClick={sellectToggle}><UserImg userId={userId}></UserImg></ProfileImage>
      <LeftNavIcon iconLink="fa-solid fa-gear"></LeftNavIcon>
      </IconBox>
      </IconArea>
    </StyledWrapper>
    ) 
}

export default LeftNav