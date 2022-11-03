import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getName } from '../../redux/auth/authSelectors';
import authOperetions from 'redux/auth/authOperations';
import { UserMenuBox, UserMenuText, UserMenuName, UserMenuBtn } from './UserMenu.styled';


export const UserMenu = () => {

  const dispatch = useDispatch();
  const user = useSelector(getName);
  const navigate = useNavigate();
  // console.log(user);

  const onLogOut = () => {
    dispatch(authOperetions.logOut());
    navigate('/');
  }

    return (
        <UserMenuBox >
      <UserMenuText >Welcome, <UserMenuName>{user} !</UserMenuName> </UserMenuText>
      <UserMenuBtn type="button" onClick = {onLogOut} >
        Logout
      </UserMenuBtn>
    </UserMenuBox>
    )
}