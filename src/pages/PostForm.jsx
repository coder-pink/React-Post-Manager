
import React, { useState } from 'react';
import { createPost } from '../services/api';

const PostForm = ({ setPosts }) => {
  const [form, setForm] = useState({ title: '', body: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const result = await createPost(form);
      setMessage(`✅ Post created successfully! ID: ${result.id}`);

      // Add new post to the top of the list
      setPosts((prev) => [result, ...prev]);

      setForm({ title: '', body: '' });
    } catch (error) {
      setMessage(`❌ ${error.message || 'Something went wrong.'}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          📝 New Blog Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter your post title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label
              htmlFor="body"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Body
            </label>
            <textarea
              name="body"
              id="body"
              rows="6"
              placeholder="Write your content here..."
              value={form.body}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-gray-900 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Submit Post
            </button>
          </div>
        </form>

        {message && (
          <p
            className={`mt-6 text-center font-medium ${
              message.startsWith('✅') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PostForm;
