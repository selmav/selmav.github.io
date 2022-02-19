import { useEffect } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router';
import './App.scss';
import Landing from './pages/Landing';
import Layout from './pages/Layout';
import RecipeReview from './pages/RecipeReview';
import Search from './pages/Search';

function RecipeReviewGuard() {
  const params = useParams();
  return (!!params?.recipeId && Number(params.recipeId) > 0) ? <RecipeReview /> : <Navigate to="/main" />
}

function App() {
  useEffect(() => { document.title = 'e-recepteka'; }, []);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="main" element={<Layout />}>
        <Route path="" element={<Navigate to="search" />} />
        <Route path="search" element={<Search key="search"/>} />
        <Route path="ingredients" element={<Search key="ingredients" ingredientSearch/>} />
        <Route path="recipe">
          <Route path=":recipeId" element={<RecipeReviewGuard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
