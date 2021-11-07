import React from 'react'

export default function seventhpage() {
    return (
        <div>
            <h1>React Class Components</h1>
            <p>Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less".</p>
            <p>With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a Class component in React.</p>
            <p>Even though Function components are preferred, there are no current plans on removing Class components from React.</p>
            <p>This section will give you an overview of how to use Class components in React.</p>
            <h2>React Components</h2>
            <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.</p>
            <p>Components come in two types, Class components and Function components, in this chapter you will learn about Class components.</p>
            <h2>Create a Class Component</h2>
            <p>When creating a React component, the component's name must start with an upper case letter.</p>
            <p>The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.</p>
            <p>The component also requires a render() method, this method returns HTML.</p>
            <p>Example : Create a Class component called Car</p>
            <img src="./assets/ex24.png" alt="" />
            <p>Now your React application has a component called Car, which returns a h2 element.</p>
            <p>To use this component in your application, use similar syntax as normal HTML: Car </p>
            <p>Example : Display the Car component in the "root" element:</p>
            <img src="./assets/ex25.png" alt="" />
            <h2>Component Constructor</h2>
            <p>If there is a constructor() function in your component, this function will be called when the component gets initiated.</p>
            <p>The constructor function is where you initiate the component's properties.</p>
            <p>In React, component properties should be kept in an object called state.</p>
            <p>The constructor function is also where you honor the inheritance of the parent component by including the super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).</p>
            <p>Example : Create a constructor function in the Car component, and add a color property:</p>
            <img src="./assets/ex26.png" alt="" />
            <p>Use the color property in the render() function:</p>
            <img src="./assets/ex27.png" alt="" />
            <h2>Components in Components</h2>
            <p>We can refer to components inside other components:</p>
            <p>Example : Use the Car component inside the Garage component:</p>
            <img src="./assets/ex28.png" alt="" />
            <h2>React Class Component State</h2>
            <p>React Class components have a built-in state object.</p>
            <p>You might have noticed that we used state earlier in the component constructor section.</p>
            <p>The state object is where you store property values that belongs to the component.</p>
            <p>When the state object changes, the component re-renders.</p>
            <h3>Creating the state Object</h3>
            <p>Example : Specify the state object in the constructor method:</p>
            <img src="./assets/ex29.png" alt="" />
            <h3>Using the state Object</h3>
            <p>Refer to the state object anywhere in the component by using the this.state.propertyname syntax:</p>
            <p>Example :Add a button with an onClick event that will change the color property:</p>
            <img src="./assets/ex30.png" alt="" />
            <br /><br />
        </div>
    )
}
