import React from "react";
import { ButtonContact } from './ContactItem.styled';
import { useDeleteContactMutation } from '../../redux/contacts/contactsSliceApi';


export const ContactItem = ({name, number, id}) => {
    
    const [deleteContact, result] = useDeleteContactMutation();
    
    return (
        <>
            <p>{name} : {number} </p>
            <ButtonContact
                type="button"
                onClick={() => deleteContact(id)}
                contactId={id}
                disabled={result.isLoading}
            >
                Delete
            </ButtonContact>
            
        </>
    )
}