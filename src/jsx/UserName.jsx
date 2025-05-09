import { useRef, useState, useEffect, useContext } from 'react'

import { db } from '../firebase.js'


function UserName(props){
  const userId = (String(props.userId));
  
  const [user, setUser] = useState({
    id: 0, name: ''
  })

  useEffect(()=>{
    db.collection('user').doc(userId).get().then((doc)=>{
    setUser(doc.data());
  }) }, [userId])

 if (!user) {
    return <span></span>; 
  }

  return <span>{user.name}</span>;
}

export default UserName