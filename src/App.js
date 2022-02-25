// import logo from './logo.svg';
import './App.css';
import Task from './components/Task'
import DateComp from './components/DateComp'
import Heading from './components/Heading'
function App() {
  return (
    <div className="App">
    <DateComp/>
    <Heading hdg="To Do List App"/>
      <div className="Tasks"><Task /></div>  
    </div>
  );
}

export default App;
