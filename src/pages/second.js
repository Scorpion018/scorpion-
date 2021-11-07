import React from 'react';
import './annual.css';



export default function Second() {
    return (
        <div>
            <h1>React Getting Started</h1>
            <p>To get an overview of what React is, you can write React code directly in HTML.</p>
            <p>But in order to use React in production, you need npm and Node.js installed.</p> <hr/>
            <h1>React Directly in HTML</h1>
            <p>The quickest way start learning React is to write React directly in your HTML files.</p>
            <p>Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.</p>
            <p>You will learn more about JSX in the React JSX chapter.</p> <hr/>
            <h2>Example:</h2>
            <p>Include three CDN's in your HTML file:</p>
            <img className="image" src="./assets/ex2.jpg" alt="example2"/> <hr/>
            <h2>Setting up a React Environment</h2>
            <p>If you have npx and Node.js installed, you can create a React application by using create-react-app.</p>
            <p>Run this command to create a React application named my-react-app:</p>
            <p className="npx">npx create-react-app my-react-app</p>
            <p>The create-react-app will set up everything you need to run a React application.</p> <hr/>
            <h2>Run the React Application</h2>
            <p>Run this command to move to the my-react-app directory:</p>
            <p className="npx" >cd my-react-app</p>
            <p>Run this command to run the React application my-react-app:</p>
            <p className="npx">npm start</p>
            <p>A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.</p>
            <p>The result:</p>
            <img className="image" src="./assets/result.png" alt="example2"/> <hr/>
            <h2>Modify the React Application</h2>
            <p>Look in the my-react-app directory, and you will find a src folder. Inside the src folder there is a file called App.js, open it and it will look like this:</p>
            <p>/myReactApp/src/App.js:</p>
            <img className="image" src="./assets/ex3.jpg" alt="example3"/><hr/>
            <p>Try changing the HTML content and save the file.</p>
            <h3>Example</h3>
            <p>Replace all the content inside the div className="App" with a h1 element.</p>
            <p>See the changes in the browser when you click Save.</p>
            <img className="image" src="./assets/ex4.png" alt="example4"/>
            <p>The result:</p>
            <img className="image" src="./assets/hello.png" alt="hello world"/>      <br /><br />
       </div>
    )
}
