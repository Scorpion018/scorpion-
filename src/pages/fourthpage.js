import React from 'react'

export default function fourthpage() {
    return (
        <div>
            <h1>React ES6 Classes</h1>
            <h2>Classes</h2>
            <p>A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.</p>
            <p>Example</p>
            <img className="image" src="./assets/ex5.jpg" alt="example2"/> <hr/>           
            <p>Example</p>
            <img className="image" src="./assets/ex6.jpg" alt="example2"/> <hr/>
            <h2>Method in Classes</h2>
            <p>You can add your own methods in a class:</p>
            <p>Example</p>
            <img className="image" src="./assets/ex7.jpg" alt="example2"/> <hr/>
            <h2>Class Inheritance</h2>
            <p>To create a class inheritance, use the extends keyword.</p>
            <p>A class created with a class inheritance inherits all the methods from another class:</p>
            <p>Example</p>
            <img className="image" src="./assets/ex8.jpg" alt="example2"/> <hr/>
            <p>The super() method refers to the parent class.</p>
            <p>By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.</p>
            <br /><br />
        </div>
    )
}
