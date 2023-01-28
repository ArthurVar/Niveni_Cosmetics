import React from 'react';
import './adminPanel.scss'
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostListCosmetic from "./cosmetics/PostListCosmetic";
import EditCosmetic from "./cosmetics/EditCosmetic";
import CreateCosmetic from "./cosmetics/CreateCosmetic";
import PostListUsers from "./users/PostListUsers";
import EditUsers from "./users/EditUsers";
import CreateUsers from "./users/CreateUsers";
import PostListOrders from "./orders/PostListOrders";
import EditOrders from "./orders/EditOrders";

const AdminPanel = () => {
    return (
        <section className='adminPanel'>
            <Admin dataProvider={restProvider('http://localhost:3000')}>
                <Resource create={CreateCosmetic} edit={EditCosmetic} name="cosmetics" list={PostListCosmetic}/>
                <Resource create={CreateUsers} edit={EditUsers} name="users" list={PostListUsers}/>
                <Resource edit={EditOrders}  name="orders" list={PostListOrders}/>
            </Admin>,
        </section>
    );
};

export default AdminPanel;