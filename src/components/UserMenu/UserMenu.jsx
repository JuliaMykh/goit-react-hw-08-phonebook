import { useSelector } from 'react-redux';

import { UserMenuBox, UserMenuText, UserMenuName, UserMenuBtn } from './UserMenu.styled';


export const UserMenu = () => {

    // const {user} = useSelector(state => state.auth.isRefreshing);


    return (
        <UserMenuBox >
      <UserMenuText >Welcome, <UserMenuName>Name !</UserMenuName> </UserMenuText>
      <UserMenuBtn type="button" >
        Logout
      </UserMenuBtn>
    </UserMenuBox>
    )
}