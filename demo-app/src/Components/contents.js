import React from "react";

//component to show multiple props
export default function Content({ name, number }) {
    const mystyle = { backgroundColor: 'blue', color: 'white', padding: '20px' }
    return (
        <p style={mystyle}>{name} loves jersey no. {number}</p>
    )
}