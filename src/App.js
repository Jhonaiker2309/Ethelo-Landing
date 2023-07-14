import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import PrincipalPage from './views/principal-page';
import Engagements from './views/engagements';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>    
      <Navbar />
        <Routes>
          <Route path="/engagements" element={<Engagements />} />
          <Route path="*" element={<PrincipalPage />} />
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
