import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

import TopNav from './NavTop.jsx'
import PostList from './PostList.jsx'
import Button from './Button.jsx'

import { db } from '../firebase.js'
import LeftNav from './NavLeft.jsx'

const Dayform =styled.form`
    height: 40px;
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: flex-end;
    line-height: 240%;
    margin-bottom: 12px;
    margin-top: 40px;
    & > p {
        margin: 0;
        padding: 0;
        border-bottom: 1px #444444 solid;
        width: auto;
        flex-grow: 1;
    }
`
const Daycheck = styled.label`

        & > input {
        position: absolute;
        opacity: 0;
        }
        & > h5 {
        margin: 0;
        padding: 0 8px 0px 8px;
        border: none;
        background-color: #ffffff;
        border-bottom: 2px #444444 solid;
        color: #444444;
        font-size: 20px;
        font-weight: 700;
        }
        & > input:checked + h5 {
        color: #FFB938;
        border-bottom: 2px #FFB938 solid;
        }

`

function MainPage(props){
  const navigate = useNavigate();
  const [checkedDay, setCheckedDay] = useState({
    none: true,
    mon: false,
    tues: false,
    wednes: false,
    thurs: false,
    fri: false,
    satur: false,
    sun: false
  });

  const handleChange = (day) => {
    setCheckedDay({
      none: false,
      mon: false,
      tues: false,
      wednes: false,
      thurs: false,
      fri: false,
      satur: false,
      sun: false,
      [day]: true // 선택한 요일만 true
    });
  };

  const selectedDays = Object.keys(checkedDay).filter((day) => checkedDay[day]);

 
  //data에 해당하는 state 생성
  const [data, setData] = useState([])
  useEffect(() => {
    let tempData = [];
    db.collection('post').get().then(function (qs) {
      qs.forEach(function (doc) {
        tempData.push(doc.data());
      });
      const filteredPost = tempData.filter((post) =>
        selectedDays.some((day) => post.daylabel[day])
      );
      setData(filteredPost);
    });
  }, [selectedDays]);

  
  return (
    <div>
      <LeftNav></LeftNav>
      <TopNav pageTitle="Mainpage" buttonTitle="글쓰기" onClick={(e)=>{ navigate('/write') }}></TopNav>
      <Dayform>
        <Daycheck><input type="radio" checked={checkedDay.none} onChange={() => handleChange('none')}/><h5>요일무관</h5></Daycheck>
        <Daycheck><input type="radio" checked={checkedDay.mon} onChange={() => handleChange('mon')}/><h5>월</h5></Daycheck>
        <Daycheck><input type="radio" checked={checkedDay.tues} onChange={() => handleChange('tues')}/><h5>화</h5></Daycheck>
        <Daycheck><input type="radio" checked={checkedDay.wednes} onChange={() => handleChange('wednes')}/><h5>수</h5></Daycheck>
        <Daycheck><input type="radio" checked={checkedDay.thurs} onChange={() => handleChange('thurs')}/><h5>목</h5></Daycheck>
        <Daycheck><input type="radio" checked={checkedDay.fri} onChange={() => handleChange('fri')}/><h5>금</h5></Daycheck>
        <Daycheck><input type="radio" checked={checkedDay.satur} onChange={() => handleChange('satur')}/><h5>토</h5></Daycheck>
        <Daycheck><input type="radio" checked={checkedDay.sun} onChange={() => handleChange('sun')}/><h5>일</h5></Daycheck>
        <p>검색을 원하는 요일을 선택해주세요!</p>
        </Dayform>
      <PostList posts={data} itemClicked={(post)=>{ navigate(`/post/${post.id}`)}}></PostList>
    </div> 
  )
}

export default MainPage 