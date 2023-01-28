import React from 'react';
import {SelectInput, NumberInput, Create, SimpleForm, TextInput } from 'react-admin';


const CreateClothes = (props) => {
    return (
        <Create title="Create a Post" {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <NumberInput source="price" />
                <NumberInput source="priceSale" />
                <SelectInput source="category" choices={[
                    {
                        id: "crem",
                        name: "crem"
                    },
                    {
                        id: "shampoo",
                        name: "shampoo"
                    },
                    {
                        id: "soap",
                        name: "soap"
                    },
                    {
                        id: "oil",
                        name: "oil"
                    },
                    {
                        id: "maskScrub",
                        name: "maskScrub"
                    }
                ]}/>
            </SimpleForm>
        </Create>
    );
};

export default CreateClothes;