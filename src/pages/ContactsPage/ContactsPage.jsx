import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';

export const ContactsPage = () => {

    return (
        
        <>
            <ContactForm />
            <Filter/>
            <ContactList />
            
        </>
    )
}