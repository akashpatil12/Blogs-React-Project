import React from 'react';

const Article = ({ title, content, author }) => {
  return (
    <div className="my-4 p-4 border rounded-md shadow-2xl flex flex-wrap ">
    <div className="w-full  p-2"> 
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="border-b-2 border-yellow-500 mt-1"></div>
      <p className="mt-2 font-mono">{content}</p>
      <div className="border-b-2 border-yellow-500 mt-1"></div>
      <p className="mt-2 font-mono">{author}</p>
    </div>
  </div>
  );
};

export default Article;