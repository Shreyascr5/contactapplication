import React from "react";
import Contact from "./Contact";

export default function ContactList(props){
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <Contact contact={contact}/>
        )})
   

    return(
        <div className="ui celled list">
        <br />
        <h2>Contact List</h2>
        {renderContactList}


        </div>
    )
}
