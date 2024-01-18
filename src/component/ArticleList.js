import React from "react";
import Article from './Article';


const ArticleList = ({ articles }) => {
    return (
      <div>
        {articles.map((article) => (
          <Article key={article.id} title={article.title} content={article.content} author={article.author} />
        ))}
      </div>
    );
  };

  export default ArticleList;