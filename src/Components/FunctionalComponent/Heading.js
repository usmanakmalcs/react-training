import React from "react";
import {HeaderText} from "../HeaderText/HeaderText";

const getNamesJSX = (namesJSON) => {
    return namesJSON.map((name,index)=>{
        return (
            <HeaderText key={index} text={name.text}/>
        )
    })
};

export const Heading = () => {
    const namesJSON = [
        {
            text: 'Awais',
        },
        {
            text: 'Hamza',
        },
    ];
    return (
        <div>
            {getNamesJSX(namesJSON)}
        </div>
    )
};