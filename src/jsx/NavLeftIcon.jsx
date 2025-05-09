import styled from 'styled-components'

const StyledButton = styled.button`
    font-size: 24px;
    height: 40px;
    width: 40px;
    background: none;
    border: 0px;
    color: #222222;
`
function LeftNavIcon(props){
  const {iconLink, onClick} = props

  return(
  <StyledButton onClick={onClick}>
    <i className={iconLink}></i>
  </StyledButton>
  )
}

export default LeftNavIcon