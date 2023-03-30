
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './landingpage/Home';
import './assets/styles/main.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>} />
</Routes>
    </BrowserRouter>
  );
}

export default App