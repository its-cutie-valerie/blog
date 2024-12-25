import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';

const App: React.FC = () => (
  <div>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:articleId" element={<Article />} />
      </Routes>
    </Router>
    <Footer />
  </div>
);

export default App;