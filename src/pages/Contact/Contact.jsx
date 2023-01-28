import React from 'react';
import ContactHeader from "./Crumbs/Crumbs";
import Contacts from "./Contacts/Contacts";
import ContactFrom from "./ContactForm/ContactFrom";
import MapComp from './Map/MapComp';

const Contact = () => {
    return (
        <main>
            <ContactHeader/>
            <MapComp/>
            <Contacts/>
            <ContactFrom/>
        </main>
    );
};

export default Contact;