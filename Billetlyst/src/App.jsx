import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import EventPage from './components/EventPage';
import Dashboard from './components/Dashboard'
import CategoryPage from './components/CategoryPage';

function App() {
  
return(
  <>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/eventpage" element={<EventPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/category/:slug" element={<CategoryPage />} />
<Route path="/event/:id" element={<EventPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/:category" element={<CategoryPage />} />


      </Routes>
    </>
    )
};

export default App;
