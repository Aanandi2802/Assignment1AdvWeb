import './App.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom' 

// components takes precedence over default styles.
import Dashboard from './pages/Dashboard';
import Course from './views/Course';
import Mapping from './views/Mapping';
import Approval from './views/Approval';
import CustomNavbar from './components/CustomNavbar';

function App() {
  return (
    <div className="App">
      
      <CustomNavbar />
      <BrowserRouter> 
        <div> 
          <Routes>
        <Route path="/" exact element={<Dashboard/>} /> 
        <Route path="/courses"  element={<Course/>} /> 
        <Route path="/mapp"  element={<Mapping/>} /> 
        <Route path="/approve"  element={<Approval/>} /> </Routes>
        </div>  
      </BrowserRouter> 
    </div>
  );
}

export default App;
