import React, {
  useEffect,
  useState,
  useRef
} from 'react';
import './App.css';

window.React = React

// import axios from 'axios';

// import React, { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();
  console.log(`savedCallback: `, savedCallback)

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Counter />, rootElement);


export default Counter;
