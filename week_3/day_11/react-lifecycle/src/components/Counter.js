import React, { useState, useEffect } from 'react';

export default function Counter(props) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Will run when component is initialized
  useEffect(() => {
    // Subscribe
    console.log('Counter component did mount');

    return () => {
      // Unsubscribe
      console.log('Counter component did unmount');
    };
  }, []);

  // Will run when props.appcount is changed
  useEffect(() => {
    console.log('Counter appCount did change');
  }, [props.appCount]);

  // Will run when count2 is changed
  useEffect(() => {
    console.log('Counter count 2 did update');
  }, [count2]);

  // Will run when either count1 or count2 is changed
  useEffect(() => {
    console.log('In Counter, a count did update');
  }, [count1, count2]);

  return (
    <div className="mt-5">
      <h1>Count 1: {count1}</h1>

      <h1>Count 2: {count2}</h1>

      <h1>App Count: {props.appCount} </h1>

      <button
        className="btn btn-primary me-1 my-3"
        onClick={() => setCount1(count1 + 1)}
      >
        Add To Count 1
      </button>

      <button
        className="btn btn-primary ms-1 my-3"
        onClick={() => setCount2(count2 + 1)}
      >
        Add To Count 2
      </button>
    </div>
  );
}
