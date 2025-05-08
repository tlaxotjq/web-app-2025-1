import styled from 'styled-components'
import { useUserContext } from "../userContext.jsx";
import UserName from './UserName.jsx';
import UserImg from './UserImg.jsx';
const StyledWrapper = styled.div`
    display: flex;
    background-color: #ffffff;
    padding: 0;

    gap: 16px;
`

const StyledImg = styled.div`
    width: 40px;
    height: 40px;
    background-color: #eeeeee;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledText = styled.div`
    padding: 0;
    margin: 0;
`
const StyledContent = styled.p`
    font-size: 13px;
    padding: 0;
    margin: 0;
    width: 224px;
    text-align : justify;
`
const StyledUser = styled.div`
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    margin-bottom: 6px;
    & > h1{
    font-size: 13px;
    font-weight: 600;
    color: #111111;
    padding: 0;
    margin: 0;
    }

    & > h2{
    font-size: 13px;
    font-weight: 300;
    color: #666666;
    padding: 0;
    margin: 0;
    }
`
function CommentItem(props){
    // comment: 댓글 데이터
    const {comments} = props

    return (
        <StyledWrapper>
            <StyledImg><UserImg userId={comments.writer}></UserImg></StyledImg>
            <StyledText>
                <StyledUser><h1><UserName userId={comments.writer}></UserName></h1><h2>{comments.time}</h2></StyledUser>
                <StyledContent>{comments.comment}</StyledContent>
            </StyledText>
        </StyledWrapper>
    )
}

export default CommentItem

