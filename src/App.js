// src/App.js
import React, { useState } from 'react';
import ArticleList from './component/ArticleList';
import AddArticle from './component/AddArticle';

const App = () => {
  const [articles, setArticles] = useState([]);

  const handleAddArticle = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  return (
    <div className="container mx-auto p-4">
      <AddArticle onAddArticle={handleAddArticle} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;
