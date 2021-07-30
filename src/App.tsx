import React from 'react';
import logo from './logo.svg';
import { useSpring, animated } from 'react-spring' // <-- import the spring component and the animated component
import './App.css';
import ProductList from './components/ProductList';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/Carousel';
import { Footer } from './components/Footer';



const App: React.FC = () => {
  /**
   * styles object is used to pass in a style attribute that will be applied to the div
   
   const styles = useSpring({
    to: 
    async (next, cancel) => {
      await next({ opacity: 1 }) // within the to property, you can chain multiple animations together.
      await next({ opacity: 0 }) 
    },
    from: { opacity: 0 }, // set initial animation state
    loop: true, // loop the animation sequence
    delay: 300, // delay between animations
    
    
  })
  */
  /**
   * We can pass in a style object to the animated component
   * We can also use modify a div using React spring's 'animated' which enables native rendering
   * Rather than forcing an update or setting state at every frame like other react animation libs do(which is expensive)
   * It will render the component once, then animate it in the background and set the styles directly.
   *  */
  return (
    
    /*<div className="App">
      <div className="title">
        <h1>Learning React Spring</h1> 
        </div>
     <animated.div style={styles}>
       <img src={logo} className="App-logo" alt="App Logo" />
     </animated.div>
    </div>*/
    <body className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
    <div className='overflow-visible z-20' style={{position:'relative' ,zIndex:30, overflow:'visible'}}>
    <Navbar/>
    </div>
    <div className='overflow-visible z-0' style={{ position:'relative',zIndex:20  , overflow:'auto'}}>
    <Carousel/>
    </div>
    <ProductList/>
    <Footer/>
    </body>
    
    
  );
}

export default App;
