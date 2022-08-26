import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Landpage from './Pages/Landpage'
import Login from './Pages/Login'
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Landpage />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
