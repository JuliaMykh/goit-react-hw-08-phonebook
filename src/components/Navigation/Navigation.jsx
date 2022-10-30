
import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {

    return (
        <>
            <nav>
                <NavigationLink to="/">Home</NavigationLink>
                <NavigationLink to="/contacts">Contacts</NavigationLink>
            </nav>
        </>
    )
};

