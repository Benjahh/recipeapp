import '../src/App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { CreateRecipe } from './pages/createrec'
import { Home } from './pages/home'
import { SavedRecipes }  from './pages/savedrec'
import { Auth } from './pages/auth'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/saved-recipes' element={<SavedRecipes/>}/>
          <Route path='/create-recipe' element={<CreateRecipe/>}/>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
