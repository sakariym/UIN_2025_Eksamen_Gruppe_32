import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import EventPage from './components/EventPage'
import Dashboard from './components/Dashboard'


function App() {
  
return(
  <>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/EventPage" element={<EventPage />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>

  </>
)
}

export default App
