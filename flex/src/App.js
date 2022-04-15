import logo from './logo.svg';
import { useRoutes } from "react-router-dom";
import Navbar from './Navbar';
import Excercises from './Excercises';
import Routines from './Routines';
import Stretches from './Stretches'
import Home from './Home'
import './App.css';

function App() {

  const routes = useRoutes(
    [{ path: '/', element: <Home /> },
    { path: `/exercises`, element: <Excercises /> },
    { path: '/routines', element: <Routines/> },
    { path: '/stretches', element: <Stretches /> }
    
  ])

  return (
    <div className="App">
      <h1>Let's Get Better</h1>
      <div>
        <Navbar />
      </div>
      {routes}
    </div>
  )
}

export default App;
