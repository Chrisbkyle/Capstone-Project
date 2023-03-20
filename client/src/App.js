import './App.css';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import RecipeTable from './components/RecipeTable';
import RecipeBuilder from './components/RecipeBuilder';
import RecipeForm from './components/RecipeBuilder/RecipeForm';

function App() {
  return (
    <div className="App">

      {/* <LoginPage /> */}

      {/* <MainPage /> */}

      <RecipeTable sortConfig={{ sortBy: 'recipe', direction: 'ascending' }} />

      <RecipeBuilder />

      {/* <RecipeForm /> */}

      {/* <Footer /> */}

    </div>
  );
}

export default App;
