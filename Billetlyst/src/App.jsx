import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import EventPage from './components/EventPage';
import Dashboard from './components/Dashboard'
import CategoryPage from './components/CategoryPage'


function App() {
<<<<<<< HEAD
  
return(
  <>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/eventPage" element={<EventPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/category/:slug" element={<CategoryPage />} />

    </Routes>
=======
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/event" element={<EventPage />} />
<Route path="/event/:id" element={<EventPage />} />
>>>>>>> 8ec32fa223f1bc32154f5088fe179b3102bcb054

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
