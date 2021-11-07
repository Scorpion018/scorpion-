import React from 'react'

export default function sixthpage() {
    return (
        <div>
            <h1>React JSX</h1>
            <p>JSX stands for JavaScript XML.</p>
            <p>JSX allows us to write HTML in React.</p>
            <p>JSX makes it easier to write and add HTML in React.</p>
            <h2>Coding JSX</h2>
            <p>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.</p>
            <p>JSX converts HTML tags into react elements.</p>
            <p>Example 1: With JSX</p>
            <img src="./assets/ex12.png" alt=""/>
            <p>Example 2: Without JSX</p>
            <img src="./assets/ex13.png" alt=""/>
            <p>JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.</p>
            <h2>Expressions in JSX</h2>
            <p>With JSX you can write expressions inside curly braces .</p>
            <p>The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:</p>
            <p>Example: Execute expression 5 + 5</p>
            <img src="./assets/ex14.png" alt=""/>
            <p>Inserting a Large Block of HTML</p>
            <p>To write HTML on multiple lines, put the HTML inside parentheses:</p>
            <p>Example: Create a list with three list items:</p>
            <img src="./assets/ex15.png" alt=""/>
            <h3>Elements Must be Closed</h3>
            <p>JSX follows XML rules, and therefore HTML elements must be properly closed.</p>
            <img src="./assets/ex16.png" alt=""/>
            <h3>Attribute class = className</h3>
            <p>The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.</p>
            <p>JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.</p>
            <p>Example: Create a list with three list items:</p>
            <img src="./assets/ex17.png" alt=""/>
            <h3>Conditions - if statements</h3>
            <p>React supports if statements, but not inside JSX.</p>
            <p>To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:</p>
            <p>Write if statements outside of the JSX code:</p>
            <p>Example : Write "Hello" if x is less than 10, otherwise "Goodbye":</p>
            <img src="./assets/ex18.png" alt=""/>
            <p>Use ternary expressions instead:</p>
            <p>Example : Write "Hello" if x is less than 10, otherwise "Goodbye":</p>
            <img src="./assets/ex19.png" alt=""/>
            <h2>React Components</h2>
            <p>Components are like functions that return HTML elements.</p>
            <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
            <p>Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>
            <p>Create Your First Component:</p>
            <p>When creating a React component, the component's name MUST start with an upper case letter.</p>
            <p>Class Component</p>
            <p>A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.</p>
            <p>The component also requires a render() method, this method returns HTML.</p>
            <p>Example : Create a Class component called Car</p>
            <img src="./assets/ex20.png" alt=""/>
            <h3>Function Component</h3>
            <p>Here is the same example as above, but created using a Function component instead.</p>
            <p>A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.</p>
            <p>Example Create a Function component called Car</p>
            <img src="./assets/ex21.png" alt=""/>
            <h3>Rendering a Component</h3>
            <p>Now your React application has a component called Car, which returns an h2 element.</p>
            <p>To use this component in your application, use similar syntax as normal HTML</p>
            <p>Example : Display the Car component in the "root" element:</p>
            <img src="./assets/ex22.png" alt=""/>
            <h3>Components in Components</h3>
            <p>We can refer to components inside other components:</p>
            <p>Example : Use the Car component inside the Garage component:</p>
            <img src="./assets/ex23.png" alt=""/>       <br /><br />
        </div>
    )
}
