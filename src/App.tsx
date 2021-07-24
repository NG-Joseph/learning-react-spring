import React from 'react';
import logo from './logo.svg';
import { useSpring, animated } from 'react-spring'
import './App.css';

const App: React.FC = () => {
  // Testing the useSpring hook
  const styles = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1 })
      await next({ opacity: 0 })
    },
    from: { opacity: 0, color: 'red' },
    loop: true,
    delay: 300,
    
    
  })
  
  return (
    
    <div className="App">
      <div className="title">
        <h1>Learning React Spring</h1>
        </div>
     <animated.div style={styles}>
       <img src={logo} className="App-logo" alt="App Logo" />
     </animated.div>
    </div>
    
  );
}

export default App;
