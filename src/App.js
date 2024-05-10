import './App.css';
import Activity from './Components/Activity';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TherapyBook from './Components/TherapyBook';
import Letschat from './Components/Letschat';
import Home from './Components/Home';


function App() {
  return (
    <Router>
    
     <div className='App'>
      <Navigation/>
      <Routes>
        
      <Route exact path="/" element={<><Home /></>}/>
      <Route exact path="/activity" element={<>< Activity/></>}/>
      <Route exact path="/Therapy" element={<><TherapyBook /></>}/>
      <Route exact path="/chat" element={<><Letschat /></>}/>


      </Routes>

     </div>
     </Router>
  );
}

export default App;
