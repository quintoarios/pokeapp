import React from "react";

const HolaMundo = ({ title, children }) => {
    return (
        <div>
        <h1>{ title }</h1>
        <p>Hola soy un parrafo</p>
        {children}
        </div>
     );
};

export default HolaMundo;