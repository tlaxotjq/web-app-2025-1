import { useRef, useState, useEffect, useContext } from 'react'

import { db } from '../firebase.js'


function UserName(props){
  const userId = (String(props.userId));
  
  const [user, setUser] = useState({
    id: 0, name: '오류'
  })

  useEffect(()=>{
    console.log("사용자자 로드 시도");
    console.log("입력값", userId);
    db.collection('user').doc(userId).get().then((doc)=>{
    setUser(doc.data());
    console.log("로드된 사용자", user);
  }) }, [userId])

 if (!user) {
    return <span>사용자</span>;  // or fallback 표시
  }

  return <span>{user.name}</span>;
}

export default UserName