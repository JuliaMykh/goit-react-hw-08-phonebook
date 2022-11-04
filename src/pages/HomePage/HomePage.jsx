import { HomePageBox, Image } from './HomePage.styled';
import homeBg from '../../components/Images/homeBg.jpg'

const HomePage = () => {

    return (
        <HomePageBox>
            <Image src={homeBg} alt="Phone book" />
            {/* <HomeTitle>Phonebook</HomeTitle> */}
        </HomePageBox>
    )
};

export default HomePage;