import './App.css';
import NavBar from './components/NavBar'
import Button from './components/ButtonBar';
import Form from './components/Form';
import DropDown from './components/DropDown'

function App() {

  return (
    <div className="App">
      <h1>Bootstrap Website</h1>
      {/* Render NavBar */}
      <NavBar />
      {/* Render Button */}
      <Button />
      {/* Render Form */}
      <Form />
      {/* Render DropDown */}
      <DropDown />
    </div>
  );
}

export default App;
