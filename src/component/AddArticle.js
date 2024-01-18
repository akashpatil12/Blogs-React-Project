// src/components/AddArticle.js
import React, { useState } from 'react';

const AddArticle = ({ onAddArticle }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleAddArticle = () => {
    if (!title || !content || !author) {
      setError('Please fill in both title and content.');
      return;
    }

    const newArticle = {
      id: Date.now(),
      title,
      content,
      author
    };

    onAddArticle(newArticle);
    setTitle('');
    setContent('');
    setAuthor('');
    setError('');
  };

  return (
    <div className="my-4 p-4 border rounded-md shadow-2xl max-w-[40rem] mx-auto">
      <div className="flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Add New Article</h2>
          <div className="border-b-2 border-blue-500 mt-1"></div>
        </div>
        <div className="mb-4 ">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4 ">
          <input
            type="text"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div>
          <button onClick={handleAddArticle} className="p-2 w-full text-white font-bold rounded-lg  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Add Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
