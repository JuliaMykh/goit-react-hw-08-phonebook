import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";

import { HeaderBar } from './AppBar.styled';

export const AppBar = () => {

    return (
        <HeaderBar>
            <Navigation />
            <UserMenu />
            <AuthNav />
        </HeaderBar>
    )
};
