import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #ffffff;
    font-size: 14px;
    font-weight: 300;
    padding: 0px 16px;
    height: 40px;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    border: none;
    & > i{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
        color: #666666;
    font-size: 20px;
    }
`

function IconButton(props){
    const {iconLink, onClick} = props

    return (
        <StyledButton onClick={onClick}>
            <i className={iconLink}></i> 00
        </StyledButton>
    )
}

export default IconButton