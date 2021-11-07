import React from "react";

export default function tenthpage() {
  return (
    <div>
      <h1>React Forms</h1>
      <p>
        Just like in HTML, React uses forms to allow users to interact with the
        web page.
      </p>
      <h2>Adding Forms in React</h2>
      <p>You add a form with React like any other element:</p>
      <p>Example :Add a form that allows users to enter their name:</p>
      <img src="./assets/ex41.png" alt="" />
      <p>
        This will work as normal, the form will submit and the page will
        refresh.
      </p>
      <p>But this is generally not what we want to happen in React.</p>
      <p>
        We want to prevent this default behavior and let React control the form.
      </p>
      <br />
      <h2>Handling Forms</h2>
      <pre>
        Handling forms is about how you handle the data when it changes value or <br />
        gets submitted. In HTML, form data is usually handled by the DOM. In <br />
        React, form data is usually handled by the components. When the data is <br />
        handled by the components, all the data is stored in the component <br />
        state. You can control changes by adding event handlers in the onChange <br />
        attribute. We can use the useState Hook to keep track of each inputs <br />
        value and provide a "single source of truth" for the entire application. <br />
      </pre>
      <p>Example :Use the onChange Hook to manage the input:</p>
      <img src="./assets/ex42.png" alt="" />
      <h2>Submitting Forms</h2>
      <p>You can control the submit action by adding an event handler in the onSubmit attribute for the form:</p>
      <p>Example :Add a submit button and an event handler in the onSubmit attribute:</p>
      <img src="./assets/ex43.png" alt="" />
      <br />
      <h2>Multiple Input Fields</h2>
      <p>You can control the values of more than one input field by adding a name attribute to each element.</p>
      <p>We will initialize our state with an empty object.</p>
      <p>To access the fields in the event handler use the event.target.name and event.target.value syntax.</p>
      <p>To update the state, use square brackets [bracket notation] around the property name.</p>
      <p>Example :Write a form with two input fields:</p>
      <img src="./assets/ex44.png" alt="" />
      <h2>Textarea</h2>
      <p>In React the value of a textarea is placed in a value attribute. We'll use the useState Hook to mange the value of the textarea:</p>
      <p>Example :A simple textarea with some content:</p>
      <img src="./assets/ex45.png" alt="" />
      <br />
      <h2>Select</h2>
      <p>In React, the selected value is defined with a value attribute on the select tag:</p>
      <p>Example :A simple select box, where the selected value "Volvo" is initialized in the constructor:</p>
      <img src="./assets/ex46.png" alt="" />
      <br /><br />
    </div>
  );
}
