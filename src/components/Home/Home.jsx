import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import AlbumList from '../AlbumList/AlbumList';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div>
      <h1 className={darkMode ? "text-primary" : ""}>My albums</h1>

      <AlbumList />
    </div>
  );
};

export default Home;