import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import background from "./components/logo512.png"

// import {useState} from 'react';
import Login from './login';
import Register from './register';


import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import Second from './pages/second';
import Third from './pages/thirdpage';
import Four from './pages/fourthpage';
import Five from './pages/fifthpage';
import Six from './pages/sixthpage';
import Seven from './pages/seventhpage';
import Eight from './pages/eighthpage';
import Nine from './pages/ninthpage';
import Ten from './pages/tenthpage';
// import Signin from './pages/SignIn';

import Footer from './components/Footer';

// import SignUp from './pages/signup';

function App() {
	return (
		<div className="body1" style={{
			backgroundRepeat:'no-repeat',
			width:'100%',
			backgroundColor:'black',
			opacity:'0.9',
			textAlign:'center'
		}}>
			
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/events' component={Events} />
				<Route path='/annual' component={AnnualReport} />
				<Route path='/team' component={Teams} />
				<Route path='/blogs' component={Blogs} />
				<Route path='/second' component={Second} />
				<Route path='/thirdpage' component={Third} />
				<Route path='/fourthpage' component={Four} />
				<Route path='/fifthpage' component={Five} />
				<Route path='/sixthpage' component={Six} />
				<Route path='/seventhpage' component={Seven} />
				<Route path='/eighthpage' component={Eight} />
				<Route path='/ninthpage' component={Nine} />
				<Route path='/tenthpage' component={Ten} />
				<Route path='/Footer' component={Footer}/>
				{/* <Route path='/SignIn' component={Signin}/> */}
				{/* <Route path='/sign-up' component={SignUp} /> */}
				<Route exact path='/register' component={Register} />
      			<Route exact path='/login' component={Login} />
			</Switch>


		</Router>
		
		<Footer />
		</div>
	);
}

export default App;
