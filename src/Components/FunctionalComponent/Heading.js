import React from "react";
import {HeaderText} from "../HeaderText/HeaderText";

const getNamesJSX = (namesJSON) => {
    return namesJSON.map((name,index)=>{
        return (
            <HeaderText key={index} text={name.text}/>
        )
    })
};

export const Heading = (props) => {
    const namesJSON = [
        {
            text: 'Hamza',
        },
    ];
    console.log(props);
    const { state } = props.location;
    return (
        <div>
            <div>
                {getNamesJSX(namesJSON)}
            </div>

            <HeaderText text={(state && state.name) || "Empty"}/>
        </div>
    )
};
