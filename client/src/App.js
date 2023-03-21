import './App.css';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import RecipeTable from './components/RecipeTable';
import RecipeBuilder from './components/RecipeBuilder';
import RecipePage from './components/RecipePage';
import RecipeForm from './components/RecipeBuilder/RecipeForm';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes className="App">

      <Route path='/login' element={<LoginPage />} />

      <Route path='/' element={<MainPage />} />

      <Route path='/recipe_select' element={<RecipeTable sortConfig={{ sortBy: 'recipe', direction: 'ascending' }} />} />

      <Route path='/recipe_builder' element={<RecipeBuilder />} />

      <Route path='/recipe_page/:id' element={<RecipePage />} />

      <Route path='*' element={<LoginPage />}/>

      {/* <Footer /> */}

    </Routes>
  );
}

export default App;
