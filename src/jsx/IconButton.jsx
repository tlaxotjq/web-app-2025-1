import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    padding: 0px 16px;
    height: 48px;
    margin: 0px;
    padding: 12px 20px 12px 16px;
    display: flex;
    align-items: center;
    border: 2px #666666 solid;
    border-radius: 24px;
    & > i{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
        color: #666666;
    font-size: 20px;
    }
    & > span {
    min-width: 28px;}
`

function IconButton(props){
    const {iconLink, onClick, text} = props

    return (
        <StyledButton onClick={onClick}>
            <i className={iconLink}></i> <span>{text || '00'}</span>
        </StyledButton>
    )
}

export default IconButton
