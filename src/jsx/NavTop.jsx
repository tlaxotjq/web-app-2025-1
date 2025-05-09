import styled from 'styled-components'
import Button from './Button.jsx'
const StyledWrapper = styled.div`
  margin-left: -20px; 
  z-index: 1;
`

const StyledNav = styled.div`
  box-sizing: border-box;
  padding: 0 20px;
  width: calc(100% - 60px);
  height: 61px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid #222222;


  & > button {
  }
  
  & > h1 {
  font-size: 16px;
  font-weight: 500;
  }
`
const MarginRight = styled.div`
width: ${props=> props.marginRight}; 
`
const MarginTop = styled.div`
  height: 60px;
`

function TopNav(props){
  const {buttonTitle, onClick, pageTitle, marginRight} = props
  return ( 
    <StyledWrapper>
      <StyledNav>
        <div></div>
        <h1>{pageTitle}</h1>
        {buttonTitle ? <Button title={buttonTitle} onClick={onClick}></Button> : <MarginRight marginRight={marginRight}></MarginRight>}
      </StyledNav>
      <MarginTop></MarginTop>
    </StyledWrapper>
    ) 
}

export default TopNav