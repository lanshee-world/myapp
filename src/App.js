import './App.css';
import Contactus from './components/Contactus';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Help from './components/Help';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notfound from './components/Notfound';



function App() {
  return (
    <Router>
     <div className="App">

      <nav>
        <Link to="/first" className='navlinks'>First</Link>
        <Link to="/second" className='navlinks'>Second</Link>
        <Link to="/third" className='navlinks'>Third</Link>
        <Link to="/fourth" className='navlinks'>Fourth</Link>
        <Link to="/fifth" className='navlinks'>Fifth</Link>
        <Link to="/sixth" className='navlinks'>Sixth</Link>
        <Link to="/contact" className='navlinks'>Contact</Link>
        <Link to="/help" className='navlinks'>Help</Link>
        
      </nav>

      <header className="App-header">
        <h1>Welcome to reactjs</h1>
        <h3>React is fun</h3>
      </header>
      {/* Below we render/display/show our components */}
      <Routes>
        <Route path="/first" element={<Firstcomponent/>}/>
        <Route path="/second" element={<Secondcomponent/>}/>
        <Route path="/third" element={<Thirdcomponent/>}/>
        <Route path="/fourth" element={<Fourthcomponent/>}/>
        <Route path="/fifth" element={<Fifthcomponent/>}/>
        <Route path="/sixth" element={<Sixthcomponent/>}/>
        <Route path="/contact" element={<Contactus/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div> 
    </Router>
  );
}

export default App;

// Create two other components i.e Contactus and Help components and style them with your own content.Render them on App.js component
// npm start -> node package module
// npx -> node package execute

// App.js is our root component
