import { Routes, Route } from 'react-router-dom';
import './App.css';
import RandomData from './RandomData';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Post from './pages/Post';
import DynamicPostPage from './pages/DynamicPostPage';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/show-the-api-data" element={<RandomData/> } />
        <Route path="/contact" element={<Contact/> } />
        <Route path="*" element={<ErrorPage/> } />
        <Route path="/post" element={<Post/>}/>
        <Route path="/post/:category" element={<DynamicPostPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
