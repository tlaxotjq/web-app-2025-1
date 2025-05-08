import styled from 'styled-components'
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import TopNav from './NavTop.jsx'
import Button from './Button.jsx'
import TextInput from './TextInput.jsx'
import { db } from '../firebase.js'
import { useUserContext } from "../userContext.jsx";
import LeftNav from './NavLeft.jsx'

const Inputarea = styled.div`
width: 600px;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
`
const Infoarea = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 32px;
`

const Dayform = styled.form`
  display: flex;
  `
const Daycheck = styled.label`
  & > h5 {
  box-sizing: border-box;
  height: 48px;
  line-height: 44px;
  color: #cccccc;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  padding: 0;
  padding: 0px 12px;
  border-radius: 24px;
  min-width: 48px;
  margin-right: 8px;
  border: 2px solid #cccccc;
  }
  & > input {
  position: absolute;
  opacity: 0;
  }
  & > input:checked + h5 {
  color: #ffffff;
  border: 2px solid #FFB938;
  background-color: #FFB938;}
`

function PostWritePage(props){
  const navigate = useNavigate()
  const { userId } = useUserContext('1');
  
  const [checkedDay, setCheckedDay] = useState({
    none: true,
    mon: false,
    tues: false,
    wednes: false,
    thurs: false,
    fri: false,
    satur: false,
  });

    const [formattedDate, setFormattedDate] = useState('')
  
    useEffect(() => {
      const currentDate = new Date()
      const year = currentDate.getFullYear()
      const month = String(currentDate.getMonth() + 1).padStart(2, '0')
      const day = String(currentDate.getDate()).padStart(2, '0')
    
      // 요일 계산
      const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']
      const dayOfWeek = daysOfWeek[currentDate.getDay()]
      
      setFormattedDate(`${year}-${month}-${day}, ${dayOfWeek}요일`)
    }, [])

  const handleChange = (whenday) => {
    if (whenday === 'none') {
      // '전체 선택' 클릭 시 → 나머지 해제, 전체 선택만 true
      setCheckedDay({
        none: !checkedDay.none,
        mon: false,
        tues: false,
        wednes: false,
        thurs: false,
        fri: false,
        satur: false,
        sun: false,
      });
    } else {
      // 나머지 체크 클릭 시 → 전체 선택 해제
      setCheckedDay((prev) => {
        const updated = {
          ...prev,
          [whenday]: !prev[whenday],  // 선택/해제 toggle
          none: false,        // 요일무관 해제
        };
  
        // 모든 요일이 false면 → 자동으로 '요일무관' true로
        const isAllFalse = Object.keys(updated).every((k) => k === 'none' || updated[k] === false);
        if (isAllFalse) {
          updated.none = true;
        }
  
        return updated;
      });
    }
  };

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [subtitle, setSubtitle] = useState('')

  const writePost = () => {
    let timestamp = new Date().getTime().toString()

    db.collection('post').doc(timestamp).set({
      id: timestamp,
      writer: userId,
      formattedDate: formattedDate,
      daylabel: checkedDay,
      title: title,
      subtitle: subtitle,
      content: content,
      comments: []
    }).then(()=>{
      alert('글이 등록되었습니다!')
      navigate('/')
    })


  }

  return (
    <div>
      <LeftNav></LeftNav>
      <TopNav pageTitle="글을 작성하세요." buttonTitle="게시하기" onClick={(e)=>{ writePost() }}></TopNav>
    <Inputarea>
      <Infoarea>
        <TextInput title="작성자" description={userId} type="."></TextInput>
        <TextInput title="작성일" description={formattedDate} type="." height="56" value={formattedDate} ></TextInput>
      </Infoarea>
      <TextInput title="관련요일" description="*중복선택가능" type="." height="56" value={content}></TextInput>
      <Dayform>
      <Daycheck><input type="checkbox" checked={checkedDay.none} onChange={() => handleChange('none')}/><h5>요일무관</h5></Daycheck>
      <Daycheck><input type="checkbox" checked={checkedDay.mon} onChange={() => handleChange('mon')}/><h5>월</h5></Daycheck>
      <Daycheck><input type="checkbox" checked={checkedDay.tues} onChange={() => handleChange('tues')}/><h5>화</h5></Daycheck>
      <Daycheck><input type="checkbox" checked={checkedDay.wednes} onChange={() => handleChange('wednes')}/><h5>수</h5></Daycheck>
      <Daycheck><input type="checkbox" checked={checkedDay.thurs} onChange={() => handleChange('thurs')}/><h5>목</h5></Daycheck>
      <Daycheck><input type="checkbox" checked={checkedDay.fri} onChange={() => handleChange('fri')}/><h5>금</h5></Daycheck>
      <Daycheck><input type="checkbox" checked={checkedDay.satur} onChange={() => handleChange('satur')}/><h5>토</h5></Daycheck>
      <Daycheck><input type="checkbox" checked={checkedDay.sun} onChange={() => handleChange('sun')}/><h5>일</h5></Daycheck>
      </Dayform>
      
      <TextInput title="제목" height="56" value={title} onChange={(e)=>setTitle(e.target.value)}></TextInput>
      <TextInput title="부제목" height="56" value={subtitle} onChange={(e)=>setSubtitle(e.target.value)}></TextInput>
      <TextInput title="내용" height="121" value={content} onChange={(e)=>setContent(e.target.value)}></TextInput>
      </Inputarea>
    </div>
  )
}

export default PostWritePage
