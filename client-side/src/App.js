import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
import WorkPage from './Components/Page3/WorkPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/works' element={<WorkPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
