import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import './App.scss';
import Landing from './pages/Landing';
import Layout from './pages/Layout';
import Search from './pages/Search';

function App() {
  useEffect(() => { document.title = 'e-recepteka'; }, []);
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="main" element={<Layout/>}>
        <Route path="" element={<Navigate to="search"/>}/>
        <Route path="search" element={<Search/>}/>
      </Route>
    </Routes>
  );
}

export default App;
