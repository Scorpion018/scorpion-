import React from 'react'

export default function eighthpage() {
    return (
        <div>
            <h1>React Props</h1>
            <p>Props are arguments passed into React components.</p>
            <p>Props are passed to components via HTML attributes.</p>
            <p>React Props are like function arguments in JavaScript and attributes in HTML.</p>
            <p>To send props into a component, use the same syntax as HTML attributes:</p>
            <p>Example : Add a "brand" attribute to the Car element:</p>
            <img src="./assets/ex31.png" alt="" />
            <p>The component receives the argument as a props object:</p>
            <p>Example : Use the brand attribute in the component:</p>
            <img src="./assets/ex32.png" alt="" />
            <h3>Pass Data</h3>
            <p>Props are also how you pass data from one component to another, as parameters.</p>
            <p>Example : Send the "brand" property from the Garage component to the Car component:</p>
            <img src="./assets/ex33.png" alt="" />
            <p>Example : Create a variable named carName and send it to the Car component:</p>
            <img src="./assets/ex34.png" alt="" />
            <p>Or if it was an object:</p>
            <p>Example : Create a variable named carName and send it to the Car component:</p>
            <img src="./assets/ex35.png" alt="" />      <br /><br />
        </div>
    )
}   
