import './App.css';
import Contactus from './components/Contactus';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Help from './components/Help';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to reactjs</h1>
        <h3>React is fun</h3>
      </header>
      {/* Below we render/display/show our components */}
      <Firstcomponent/>
      <Secondcomponent/>
      <Contactus/>
      <Help/>
    </div>
  );
}

export default App;

// Create two other components i.e Contactus and Help components and style them with your own content.Render them on App.js component
