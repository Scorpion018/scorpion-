import React from 'react'

export default function fifthpage() {
    return (
        <div>
            <h1>React Render HTML</h1>
            <p>React's goal is in many ways to render HTML in a web page.</p>
            <p>React renders HTML to the web page by using a function called ReactDOM.render().</p>
            <h2>The Render Function</h2>
            <p>The ReactDOM.render() function takes two arguments, HTML code and an HTML element.</p>
            <p>The purpose of the function is to display the specified HTML code inside the specified HTML element.</p>
            <h2>The HTML Code</h2>
            <p>Example</p>
            <img src="./assets/ex9.jpg" alt="ex8" />
            <h2>The Root Node</h2>
            <p>The root node is the HTML element where you want to display the result.</p>
            <p>It is like a container for content managed by React.</p>
            <p>It does NOT have to be a div element and it does NOT have to have the id='root':</p>
            <p>Example</p>
            <img src="./assets/ex10.png" alt=""/>
            <p>Display the result in the header id="sandy" element:</p>
            <img src="./assets/ex11.png" alt=""/>       <br /><br />
        </div>
    )
}
