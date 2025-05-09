import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    padding: 0px 16px;
    height: 40px;
    color: #FFB938;
    border: 1px solid #FFB938;
    border-radius: 22px;
    display: block;
`

function Button(props){
    // title: 버튼의 이름, onClick: 클릭 시 실행될 것
    const {title, onClick} = props

    return (
        <StyledButton onClick={onClick}>{title || 'Button'}</StyledButton>
    )
}

export default Button

