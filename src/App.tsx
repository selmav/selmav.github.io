import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes, useParams } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import AddRecipe from './pages/AddRecipe';
import Landing from './pages/Landing';
import Layout from './pages/Layout';
import RecipeList, { RecipeListType } from './pages/RecipeList';
import RecipeReview from './pages/RecipeReview';
import Search from './pages/Search';
import { store } from './services/Store';

function RecipeReviewGuard() {
  const params = useParams();
  return (!!params?.recipeId && Number(params.recipeId) > 0) ? <RecipeReview /> : <Navigate to="/main" />
}

function App() {

  useEffect(() => { document.title = 'e-recepteka'; }, []);
  return (
    <Provider store={store}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="main" element={<Layout />}>
          <Route path="" element={<Navigate to="search" />} />
          <Route path="search" element={<Search key="search" />} />
          <Route path="ingredients" element={<Search key="ingredients" ingredientSearch />} />
          <Route path="recipe">
            <Route path=":recipeId" element={<RecipeReviewGuard />} />
            <Route path="my" element={<RecipeList key={RecipeListType.my} recipeListType={RecipeListType.my} />} />
            <Route path="saved" element={<RecipeList key={RecipeListType.saved} recipeListType={RecipeListType.saved} />} />
            <Route path="add" element={<AddRecipe />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
