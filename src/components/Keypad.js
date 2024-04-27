import React from "react";
// Code Keypad Component Here

function Keypad (){
    return (
        <input type="password"
         name = "Password"
         onChange = {() => {
            console.log('Entering password...')
         }
        
        }/>
        
    );
}

export default Keypad;