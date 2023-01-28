import React from 'react';
import { Edit, SelectInput, NumberInput, SimpleForm, TextInput } from 'react-admin';


const EditClothes = (props) => {
    return (
        <Edit title={'Изменить вещь'} {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput disabled source="image" />
                <TextInput source="title" />
                <NumberInput source="price" />
                <NumberInput  source="inStock" />
                <SelectInput source="category" choices={[
                    {
                        id: "crem",
                        name: "crem"
                    },
                    {
                        id: "soap",
                        name: "soap"
                    },
                    {
                        id: "shampoo",
                        name: "shampoo"
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
        </Edit>
    );
};

export default EditClothes;