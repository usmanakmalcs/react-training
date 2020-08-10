import React from 'react';

export const HeaderText = (props) => {
    let heading  = `Hello ${props.text}`;
    return (
        <h1> {heading}</h1>
    )
};
