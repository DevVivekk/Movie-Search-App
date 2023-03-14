import './App.css';
import Movie from './movie';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Moviedetail from './moviedetail';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/details/:api/:id' element={<Moviedetail />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
