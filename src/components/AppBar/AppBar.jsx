import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { HeaderBar } from './AppBar.styled';


export const AppBar = () => {

    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <HeaderBar>
            <Navigation />

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            
        </HeaderBar>
    )
};
