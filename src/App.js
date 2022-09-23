import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './landing_page';
import PostView from './postview';
import FormView from './form_page';


function App() {
  return (
    <Router>
      <div>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/postview" element={<PostView/>}/>
      <Route path="/formpage" element={<FormView/>}/>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
