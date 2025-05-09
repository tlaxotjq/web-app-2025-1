import { useRef, useState, useEffect, useContext } from 'react'

import { db } from '../firebase.js'


function CommentLength(props){
    const {postId} = props
    const [data, setData] = useState([])
    const [cmLength, setCmLength] = useState(0);

    const fetchComments = () => {
    let tempData = [];
      db.collection('comments').get().then(function (qs) {
        qs.forEach(function (doc) {
          tempData.push(doc.data());
        });
        const filteredData = tempData.filter((comments)=> comments.post == postId)
        setData(filteredData);
        setCmLength(filteredData.length);
      });
    };

    useEffect(() => {
      fetchComments();
      console.log(cmLength);
    }, [postId]);

  if (!cmLength) {
      <sapn>0</sapn>  
    }
  return <span>{cmLength}</span>;
}

export default CommentLength