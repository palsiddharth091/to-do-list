// import logo from './logo.svg';
import './App.css';
import Task from './components/Task'
import Heading from './components/Heading'
function App() {
  return (
    <div className="App">
    <Heading hdg="To Do List App"/>
      <div className="Tasks"><Task /></div>  
    </div>
  );
}

export default App;
