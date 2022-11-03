import { useSelector, useDispatch } from 'react-redux';

import { getName } from '../../redux/auth/authSelectors';
import authOperetions from 'redux/auth/authOperations';
import { UserMenuBox, UserMenuText, UserMenuName, UserMenuBtn } from './UserMenu.styled';


export const UserMenu = () => {

  const dispatch = useDispatch();
  const user = useSelector(getName);
  // console.log(user);

    return (
        <UserMenuBox >
      <UserMenuText >Welcome, <UserMenuName>{user} !</UserMenuName> </UserMenuText>
      <UserMenuBtn type="button" onClick = {() => dispatch(authOperetions.logOut())} >
        Logout
      </UserMenuBtn>
    </UserMenuBox>
    )
}