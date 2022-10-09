import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Users/Login/Login';
import Register from './Components/Users/Register/Register';
import Navigation from './Components/Shared/Navigation';
import Services from './Components/Services/Services';
import AddService from './Components/AddService/AddService';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/addservice" element={<AddService/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
