import React from 'react';

export default function ninthpage() {
    return (
        <div>
            <h1>React Events</h1>
            <p>Just like HTML DOM events, React can perform actions based on user events.</p>
            <p>React has the same events as HTML: click, change, mouseover etc.</p>
            <h2>Adding Events</h2>
            <p>React events are written in camelCase syntax:</p>
            <p>onClick instead of onclick.</p>
            <p>React event handlers are written inside curly braces:</p>
            <p>onClick= shoot  instead of onClick="shoot()".</p>
            <h3>React:</h3>
            <img src="./assets/ex36.png" alt="" />
            <h3>HTML:</h3>
            <img src="./assets/ex37.png" alt="" />
            <p>Example : Put the shoot function inside the Football component:</p>
            <img src="./assets/ex38.png" alt="" />
            <h2>Passing Arguments</h2>
            <p>To pass an argument to an event handler, use an arrow function.</p>
            <p>Example : Send "Goal!" as a parameter to the shoot function, using arrow function:</p>
            <img src="./assets/ex39.png" alt="" />
            <h2>React Event Object</h2>
            <p>Event handlers have access to the React event that triggered the function.</p>
            <p>In our example the event is the "click" event.</p>
            <p>Example : Arrow Function: Sending the event object manually:</p>
            <img src="./assets/ex40.png" alt="" />      <br /><br />

        </div>
    )
}
