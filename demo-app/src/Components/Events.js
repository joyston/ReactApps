import React from 'react'

export default function Greeting() {
    function sayHi() {
        alert('Hello');
    }
    return (
        <div><button onClick={sayHi}>Say Hi</button></div>

    )
}

//named export
export function GreetUser() {


    function sayFullName(name, sname) {
        alert('Hello ' + name + ' ' + sname + '!');
    }

    return (
        <div>
            <button onClick={() => sayFullName('Joyston', 'Fernandes')} >Greet User</button>
        </div>
    )
}