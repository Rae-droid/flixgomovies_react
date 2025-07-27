
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Index from './pages';
import Movies from './pages/Movies';
import Login from './pages/Login';
import TVShow from './pages/TVShow';
import  SignIn from './pages/SignIn';
import TopRated   from './pages/TopRated';
import  Trending from './pages/Trending';
import  Dashboard from './pages/Dashboard';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:7000';
const fetchData = async () => {
  try {
    const response = await axios.get('/api/user');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

const App = () => {
  return (
    <div>
    
      <Navbar/>  
    
       <Router>
        <Routes>
       
          <Route path="/" element={<Index />} />
          <Route  path="/movies" element={<Movies />} />
          <Route path='/login' element={<Login />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/tvshow' element={<TVShow />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/toprated' element={<TopRated />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* Add more routes here as needed */}
        </Routes>
       </Router>
        
       

    

    </div>
    
  )
}

export default App

    
