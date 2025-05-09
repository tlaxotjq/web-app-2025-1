import styled from 'styled-components'
import { useRef, useState, useEffect } from 'react'
const StyledDiv = styled.div`
    box-sizing: border-box;
    font-family: "Pretendard Variable", Pretendard, system-ui, Avenir, Helvetica, Arial, sans-serif;
`
const StyledTitle = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: flex-end;
    line-height: 40px;
    margin-bottom: 12px;
    margin-top: 40px;


    & > h1 {
        margin: 0;
        padding: 0;
        border-bottom: 2px #444444 solid;
        color: #444444;
        font-size: 20px;
        font-weight: 700;

    }
    & > p {
        margin: 0;
        padding: 0;
        border-bottom: 1px #444444 solid;
        width: auto;
        flex-grow: 1;
    }
`
const StyledTextArea = styled.textarea`
    font-family: "Pretendard Variable", Pretendard, system-ui, Avenir, Helvetica, Arial, sans-serif;
    height: ${props=> props.height};
    line-height: 160%;
    overflow: auto;
    resize: none;
    display: block;
    border:none;
    background-color: #f8f8f8;
    padding: 0px;
    width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    overflow-wrap: break-word;
    whiteSpace: 'pre-wrap';
    outline: none;
    box-shadow: none;
`
const StyledTextPadding = styled.div`
    background-color: #f8f8f8;
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    display: block;
    border-radius: 4px;
    margin-left: auto; 
    margin-right: auto;
    margin-bottom: 20px;
    &:focus {
    outline: 1px #222222 solid;}
`

function TextInput(props){
    const {max_length, max_height, height, value, onChange, title, description, type} = props

    const textareaRef = useRef(null);
    const [textvalue, setValue] = useState('');

    const handleChange = (e) => {
    if(max_length){
    if(e.target.value.length < max_length){
        console.log("최대값있음, 입력")
        setValue(e.target.value);
        onChange(e)
    }else {
        alert(`해당 양식은 ${max_length}자를 초과할 수 없습니다!`)
    }}
    else {     
        console.log(max_length)
        setValue(e.target.value);
        onChange(e)
    } 
    };

    useEffect(() => {
      const textarea = textareaRef.current;

      if (textarea) {
        if (!max_height){
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }else if (parseInt(textarea.scrollHeight, 10) < max_height) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
      }
    }, [textvalue]); 
  

    return (
        <StyledDiv>
        <StyledTitle><h1>{title || "작성하세요."}</h1><p>{description}</p></StyledTitle>
        {!type && <StyledTextPadding><StyledTextArea ref={textareaRef} rows="1" height={height || 80} value={value} onChange={handleChange} ></StyledTextArea></StyledTextPadding>} 
        </StyledDiv>
    )
}

export default TextInput

