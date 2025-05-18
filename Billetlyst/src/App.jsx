import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import EventPage from './components/EventPage'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
