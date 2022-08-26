import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BooksPage from './Pages/BooksPage';
import CategoriesPage from './Pages/CategoriesPage';
import './App.css';

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="Categories" element={<CategoriesPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
