import './App.css';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import RecipeTable from './components/RecipeTable';
import RecipeBuilder from './components/RecipeBuilder';
import RecipePage from './components/RecipePage';
import RecipeForm from './components/RecipeBuilder/RecipeForm';
import { Route, Routes } from 'react-router-dom'
import HeaderSidenav from './components/HeaderSideNav';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes className="App">


      <Route path='/login' element={<LoginPage />} />

      {/* <HeaderSidenav /> */}

      <Route path='/' element={<HeaderSidenav />}>
  
          <Route path='/' element={<MainPage />} />
          
          <Route path='/recipe_select' element={<RecipeTable sortConfig={{ sortBy: 'recipe', direction: 'ascending' }} />} />
            
          <Route path='/recipe_page/:id' element={<RecipePage />} />

          <Route path='/recipe_builder' element={<RecipeBuilder />} />
          

        </Route>
      {/* </Route> */}

      <Route path='*' element={<NotFound />}/>

      {/* <Footer /> */}

    </Routes>
  );
}

export default App;
