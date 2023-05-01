import React from "react";

const Blog = () => {
  return (
    <div className="my-container">
      <h1 className="font-bold text-3xl text-center">Blog Page</h1>
      <h3 className="font-bold">
        1.What is the differences between uncontrolled and controlled
        components?
      </h3>{" "}
      <br />
      <p className="text-justify underline font-bold">
        CONTROLLED COMPONENT
      </p>{" "}
      <br />
      <ul>
        <li className="list-disc">Does not maintain its internal state.</li>
        <li className="list-disc">
          Data is controlled by the parent component.
        </li>
        <li className="list-disc">Accepts its current value as a prop.</li>
        <li className="list-disc">Allows validation control.</li>
        <li className="list-disc">
          Better control over the form elements and data.
        </li>
      </ul>
      <p className="text-justify underline font-bold">UNCONTROLLED COMPONENT</p>{" "}
      <br />
      <ul>
        <li className="list-disc">Maintains its internal state.</li>
        <li className="list-disc">Data is controlled by the DOM itself.</li>
        <li className="list-disc">Uses a ref for their current values.</li>
        <li className="list-disc">Does not allow validation control.</li>
        <li className="list-disc">
          Limited control over the form elements and data.
        </li>
      </ul>{" "}
      <br />
      <h3 className="font-bold">
        2. How to validate React props using PropTypes?
      </h3>{" "}
      <br />
      <p className="text-justify">
        The PropTypes utility exports a wide range of validators for configuring
        type definitions. Below, we’ll list the available validators for basic,
        renderable, instance, multiple, collection, and required prop types.
      </p>{" "}
      <ul>
        Basic types <br />
        Below are the validators for the basic data types: <br />
        <li className="list-disc">
          PropTypes.any: The prop can be of any data type
        </li>
        <li className="list-disc">
          PropTypes.bool: The prop should be a Boolean
        </li>
        <li className="list-disc">
          PropTypes.number: The prop should be a number
        </li>
        <li className="list-disc">
          PropTypes.string: The prop should be a string
        </li>
        <li className="list-disc">
          PropTypes.func: The prop should be a function
        </li>
        <li className="list-disc">
          PropTypes.array: The prop should be an array
        </li>
        <li className="list-disc">
          PropTypes.object: The prop should be an object
        </li>
        <li className="list-disc">
          PropTypes.symbol: The prop should be a symbol
        </li>
      </ul>
      <br />
      <h3 className="font-bold">
        3. What is the difference between nodejs and express js?
      </h3>{" "}
      <br />
      <p className="text-justify">
        Express is a minimal and flexible node.js web application framework,
        providing a robust set of features for building single and multi-page,
        and hybrid web applications. On the other hand, Node.js is detailed as A
        platform built on Chrome JavaScript runtime for easily building fast,
        scalable network applications. Node.js uses an event-driven,
        non-blocking I/O model that makes it lightweight and efficient, perfect
        for data-intensive real-time applications that run across distributed
        devices. <br />
        <span className="font-bold underline"> Node.js: </span> <br />
        Node.js is an open source and cross-platform runtime environment for
        executing JavaScript code outside of a browser. You need to remember
        that NodeJS is not a framework and it’s not a programming language. Most
        of the people are confused and understand it’s a framework or a
        programming language. We often use Node.js for building back-end
        services like APIs like Web App or Mobile App. It’s used in production
        by large companies such as Paypal, Uber, Netflix, Walmart and so on.{" "}
        <br />
        <span className="font-bold underline">Express.js: </span> <br />
        Express is a small framework that sits on top of Node.js’s web server
        functionality to simplify its APIs and add helpful new features. It
        makes it easier to organize your application’s functionality with middle
        ware and routing. It adds helpful utilities to Node.js’s HTTP objects.
        It facilitates the rendering of dynamic HTTP objects
      </p>{" "}
      <br />
      <h3 className="font-bold">
        4. What is a custom hook, and why will you create a custom hook?
      </h3>{" "}
      <br />
      <p className="text-justify">
      Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.Custom React JS hooks are reusable functions that a React JS software
        developer can use to add special and unique functionality to the React
        applications. <br /><br />
        When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with use. Example: useFetch.Imagine you are developing an app that heavily relies on the network (as most apps do). You want to warn the user if their network connection has accidentally gone off while they were using your app. 
      </p>{" "}
      <br />
    </div>
  );
};

export default Blog;
