import styled from 'styled-components'
import Button from './Button.jsx'

const StyledWrapper = styled.div`
  width: calc(100% + 40px);
  height: 60px;
  background-color: #ffffff;
  position: relative;
  left: -20px;
  display: flex;
  place-items: center;
  border-bottom: 1px solid #222222;
  z-index: 1;

  & > Button {
  position: fixed;
  right: 20px;
  }
  
  & > h1 {
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
  }
`
const MarginTop = styled.div`
  height: 80px;
`

function TopNav(props){

  return ( 
    <div>
      <StyledWrapper>
        <h1>{props.pageTitle}</h1>
        {props.buttonTitle && <Button title={props.buttonTitle} onClick={props.onClick}></Button>}
      </StyledWrapper>
    </div>
    ) 
}

export default TopNav