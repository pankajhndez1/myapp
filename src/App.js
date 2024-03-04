import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import RandomData from './RandomData';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Post from './pages/Post';
import DynamicPostPage from './pages/DynamicPostPage';
import DynamicPostPageWithId from './pages/DynamicPostPageWithId';
import DynamicPostPageWithSearchParams from './pages/DynamicPostPageWithSearchParams';
import DashboardPage from './pages/Dashboard';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import PostLayout from './pages/PostLayout';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev)
  }

  const onNavigating ={
    name:'user !!'
  }
  return (
    <div className="App">
      <Navbar handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-the-api-data" element={<RandomData />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:category" element={<DynamicPostPage />} />
        <Route path="/post/:category/:id" element={<DynamicPostPageWithId />} />
        <Route path="/post/:category/:id/:etc" element={<DynamicPostPageWithSearchParams />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" 
        element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" state={onNavigating}/>} />
        <Route path='/nested-routing' element={<PostLayout/>}>
          <Route path=':route' element={<PostPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
