import React from 'react';
// import background from "./components/logo512.png"


const About = () => {
	return (
		<div>

			<h1 style={{
				display: 'flex',
				// height: '100vh',
				textAlign: 'center',
				marginLeft: '15%',
				marginRight: '15%',
				fontSize: '70px'
			}}>
				Come help us build the education the world deserves

			</h1>

			<img style={{
				marginLeft:'0%'
			}} src="./assets/logo192.png" alt="logo"/>

			<div style={{
				backgroundColor: 'wheat',
				color: 'black',
				textAlign: 'center',
				fontSize: '25px',
			}}>
				<h2>About DataGram</h2>
				<p style={{
					marginLeft: '20%',
					marginRight: '20%'
				}}>When we started Codecademy, our goal was to give anyone in the world the ability to learn the skills they’d need to succeed in the 21st century. We set out to create a new, interactive way of learning — making it engaging, flexible, and accessible for as many people as possible. Since then, we have helped millions of people worldwide unlock modern technical skills and reach their full potential through code.
				</p>

				<h2>
				Our Mission
				</h2>
				<p style={{
					marginLeft:'20%',
					marginRight:'20%'
				}}>
				We want to create a world where anyone can build something meaningful with technology, and everyone has the learning tools, resources, and opportunities to do so. Code contains a world of possibilities — all that’s required is the curiosity and drive to learn. At Codecademy, we are committed to empowering all people, regardless of where they are in their coding journeys, to continue to learn, grow, and make an impact on the world around them.


				</p>
			</div>
		</div>
	);
};

export default About;
