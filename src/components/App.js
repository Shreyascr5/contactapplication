import React from 'react';
import './App.css';
import Header from './Header'
import AddContact from './ContactCard'
import ContactList from './ContactList'
import { useEffect } from 'react';
import { uuid } from 'uuidv4';

function App() {
    const LOCAL_STORAGE_KEY="contacts";
    const [contacts, setContacts]=React.useState([]);


    const addContactHandler= (contact) =>{
        console.log(contact);
        setContacts([...contacts,{id: uuid(),...contact}])
    };
    const removeContactHandler= (id) => {
        const newContactList= contacts.filter((contact)=>{
            return contacts.id!==id;
        }
        )
        setContacts(newContactList);
    }

    useEffect(()=>{
       const retriveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     
       if(retriveContacts)
      { 
        setContacts(retriveContacts);
    };
    },[]);

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));

    },[contacts]);
 return(
    <div className='ui container'>
        <Header/>
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
 )
}

export default App;
