import React, { useState, useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
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

function App() {
  //const now = new Date().toLocaleTimeString()
  const [time, setTime] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    document.title = `Delay is just updated to ${delay} ms`;
  }, [delay]); // Only re-run this effect if delay changes , aka. browser tab title is just updated once delay changes

  useInterval(
    () => {
      // Your custom logic here
      setTime(time + 1);
    },
    isRunning ? delay : null
  ); // Only re-run this custom hook if delay changes, aka a new interval will be set once delay changes

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }
  function handleToggleTimeChange() {
    setIsRunning(!isRunning);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <input value={delay} onChange={handleDelayChange} />
      <button onClick={handleToggleTimeChange}>
        {isRunning ? "Turn Off" : "Turn On"} Timer
      </button>
      <button onClick={handleDelayChange} value="1000">
        Set Timer 1s
      </button>
    </div>
  );
}

export default App;
