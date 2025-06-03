import React from "react";

//component to show multiple props
export default function Content({ name, number }) {
    return (
        <p>{name} loves jersey no. {number}</p>
    )
}