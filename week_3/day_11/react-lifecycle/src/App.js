import './App.css';
import Counter from './components/Counter';

import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './components/Clock';

function App() {
  const [showCounter, setShowCounter] = useState(false);
  const [appCount, setAppCount] = useState(0);

  return (
    <div className="container mt-5">
      <h1 className="text-center">React Lifecycle</h1>
      <p>
        Helps us avoid double updates, strange effects, double animations etc
      </p>
      <ul>
        <li>componentWillMount - Immediately before initial rendering</li>
        <li>
          <strong>componentDidMount</strong> - Immediately after initial
          rendering
        </li>
        <li>componentWillReceiveProps - When component receives new props</li>
        <li>
          shouldComponentUpdate, return false to prevent rerendering - Before
          rendering, after receiving new props or state
        </li>
        <li>
          componentWillUpdate - Before rendering, after receiving new props or
          state
        </li>
        <li>
          <strong>componentDidUpdate</strong> - After component's updates are
          flushed to the DOM
        </li>
        <li>
          <strong>componentWillUnmount</strong> - Immediately before removing
          component from DOM
        </li>
      </ul>

      <Clock></Clock>
      {/* {showCounter ? <Counter appCount={appCount} /> : <></>} */}
      <button
        className="btn btn-primary me-1"
        onClick={() => setShowCounter(!showCounter)}
      >
        Toggle show Counter
      </button>
      <button
        className="btn btn-primary ms-1"
        onClick={() => setAppCount(appCount + 1)}
      >
        Inc App Count
      </button>
    </div>
  );
}

export default App;
