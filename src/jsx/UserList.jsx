import styled from 'styled-components'
import UserItem from './UserItem.jsx'

const StyledWrapper =styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ffffff;
  border-radius: 4px;
  margin-top: 2px;
`

function UserList(props){
  const {users, itemClicked} = props

  const list = users.map((user, index)=>{
    return <UserItem key={user.id} user={user} onClick={(e)=>itemClicked(user)}></UserItem>
  })

  return (
    <StyledWrapper>

      {list}
    </StyledWrapper>
  )
}

export default UserList