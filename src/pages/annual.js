import React from 'react';
import './annual.css';
// import img1 from './assets/logo.jpg';
const AnnualReport = () => {
	return (
		<div style={{
			textAlign:'center'
		}}>

<img style={{
				marginLeft:'-1%'
			}} src="./assets/logo192.png" alt="logo"/>
			<h1>Tutorials:</h1>
			<h1>Get Started</h1>
			<pre>
				React is a JavaScript library for building user interfaces. < br />
				React is used to build single-page applications.<br />
				React allows us to create reusable UI components.
			</pre>

			<h2>Learn By Example:</h2>

			{/* <img src={img1} alt=""/> */}

			<img src="./assets/ex1.jpg" alt="Example1" />

			<div>
				<h2>Create React App</h2>
				To learn and test React, you should set up a React Environment on your computer.< br />

				This tutorial uses the  create-react-app.< br />

				The create-react-app tool is an officially supported way to create React applications.< br />

				Node.js is required to use create-react-app.< br />

				Open your terminal in the directory you would like to create your application.< br />

				Run this command to create a React application named my-react-app:< br />
			</div>

			<div>
				<p className="npx" >npx create-react-app my-react-app</p>
			</div>

			<h1>Run the React Application</h1>
			<p>Run this command to move to the my-react-app directory:</p>
			<p className="npx">cd my-react-app</p>
			<p>Run this command to execute the React application my-react-app:</p>
			<p className="npx">npm start</p>
			<p>A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.</p>
			<p>The result:</p>
			<img src="./assets/result.png" alt="Result Page"/>
			<br /><br />
		</div>
	);
};

export default AnnualReport;
