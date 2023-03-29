import './App.css';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage'
import RecipeTable from './components/RecipeTable';
import RecipeBuilder from './components/RecipeBuilder';
import RecipePage from './components/RecipePage';
import { Route, Routes } from 'react-router-dom'
import HeaderSidenav from './components/HeaderSideNav';
import NotFound from './components/NotFound';
import SignupPage from './components/SignupPage';
import BackgroundGrid from './components/LoginBackground';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<BackgroundGrid />}></Route>

        <Route path='/signup' element={<BackgroundGrid />}></Route>

        <Route path='/app' element={<BackgroundGrid />}></Route>

      </Routes>

      <Routes>

        <Route path='/' element={<LoginPage />} />
        
        <Route path='/signup' element={<SignupPage />} />

        <Route path='/app' element={<HeaderSidenav />}>
    
            <Route path='/app' element={<MainPage />} />

            <Route path='/app/recipe_builder' element={<RecipeBuilder />} />
            
            <Route path='/app/recipe_select' element={<RecipeTable sortConfig={{ sortBy: 'recipe', direction: 'ascending' }} />} />
              
            <Route path='/app/recipe_page/:id' element={<RecipePage />} />
            
          </Route>


        <Route path='*' element={<NotFound />}/>




      </Routes>
    </div>
  );
}

export default App;
