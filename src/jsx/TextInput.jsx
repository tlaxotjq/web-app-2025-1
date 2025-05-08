import styled from 'styled-components'

const StyledDiv = styled.div`
    box-sizing: border-box;
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
    box-sizing: border-box;
    height: ${props=>props.height}px;
    width: 100%;
    resize: none;
    display: block;
    border:none;
    background-color: #f8f8f8;
    border-radius: 4px;
    margin-left: auto; 
    margin-right: auto;
    margin-bottom: 20px;
    padding: 20px;
`

function TextInput(props){
    // height: 높이, value & onChange: 제어 컴포넌트용
    const {height, value, onChange, title, description, type} = props

    return (
        <StyledDiv>
        <StyledTitle><h1>{title || "작성하세요."}</h1><p>{description}</p></StyledTitle>
        {!type && <StyledTextArea height={height || 80} value={value} onChange={onChange}></StyledTextArea>} 
        </StyledDiv>
    )
}

export default TextInput

