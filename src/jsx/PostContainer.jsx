import styled from 'styled-components'
import IconButton from './IconButton.jsx'
import UserName from './UserName.jsx'

const StyledWrapper = styled.div`
    width: 680px;
    margin-left:auto;
    margin-right:auto;
    position: relative;
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
        font-size: 34px;
        font-weight: 700;
        line-height: 160%;
    }
    & > p {
        margin: 0;
        padding: 0;
        border-bottom: 1px #444444 solid;

        width: auto;
        flex-grow: 1;
    }
`

const StyledContent = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: #222222;
    line-height: 160%;
    box-sizing: border-box;
    display: block;
    border:none;
    background-color: #f8f8f8;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 32px;
`

const Styledinfo = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    color: #666666;
`

const CreateInfo = styled.div`
height: 48px;
border-left: 4px solid #444444;
font-size: 15px;
font-height: 120%;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 16px;
& > h5{
margin: 0;
padding: 0;
}
`

function PostContainer(props){

    const {post} = props

    return (
        <StyledWrapper>
            <StyledTitle><h1>{post.title || "제목이 없습니다."}</h1><p></p></StyledTitle>
            <StyledContent>{post.content || "내용이 없습니다."}</StyledContent>
            <Styledinfo>
            <CreateInfo>
                <h5><UserName userId={post.writer}/>님에 의하여</h5>
                <h5>{post.formattedDate}에 작성</h5>
            </CreateInfo>
            <IconButton iconLink="fa-regular fa-heart"></IconButton> <IconButton iconLink="fa-regular fa-comment-dots"></IconButton>
            </Styledinfo>
        </StyledWrapper>
    )
}

export default PostContainer

