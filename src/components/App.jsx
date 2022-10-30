import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import HomePage from 'pages/HomePage/HomePage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';



export function App() {

  return (

    <>
      {/* <h1>Phonebook</h1>
        <ContactForm  />

      <h2>Contacts</h2>
        <Filter  />
      
      <ContactList/> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
        </Route>
      </Routes>
    </>
    
)
  
}; 

  