import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import AlbumDetail from './components/AlbumDetail/AlbumDetail';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={`App ${darkMode ? "bg-dark" : ""}`}>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/albums/:albumId">
            <AlbumDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
