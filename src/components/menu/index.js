import React from 'react'
import styled from 'styled-components'

import HeaderMenu from '../headerMenu'
import RowMenu from '../RowMenu'

const Menu = ({ user, disconnect }) => {
  return (
    <MenuContainer>
      <HeaderMenu username={user.username} avatar={user.avatar}></HeaderMenu>
      <RowMenu onClick={() => alert('alerte')} label='alert'></RowMenu>
      <RowMenu onClick={disconnect} label='deconnexion'></RowMenu>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  background-color: red;
`

export default Menu
