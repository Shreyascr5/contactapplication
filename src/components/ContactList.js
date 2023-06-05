import React from "react";
import Contact from "./Contact";

export default function ContactList(props){
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };

    const renderContactList=props.contacts.map((contact)=>{
        return(
            <Contact contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        )})
   

    return(
        <div className="ui celled list">
        <br />
        <h2>Contact List</h2>
        {renderContactList}


        </div>
    )
}
