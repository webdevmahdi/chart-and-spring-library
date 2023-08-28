import { useState } from 'react';
import './App.css'
import Chart from './components/Chart/Chart';
import { useSpring, animated } from '@react-spring/web';

function App() {
  let [flip, set] = useState(false);

  const props = useSpring(
    () => ({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 200,
      onRest: () =>set(!flip)
    }),
    [])
  return (
    <div>
      <animated.div style={props}>Hello World</animated.div>
      <Chart></Chart>
    </div>
  )
}

export default App
