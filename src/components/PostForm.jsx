// import React, { useState } from 'react';
// import { createPost } from '../services/api';

// const PostForm = () => {
//   const [form, setForm] = useState({ title: '', body: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       const result = await createPost(form);
//       setMessage(`✅ Post created successfully! ID: ${result.id}`);
//       setForm({ title: '', body: '' });
//     } catch (error) {
//       setMessage(`❌ ${error.message}`);
//     }
//   };

//   return (
//     <div>
//       <h2>Create New Post</h2>
//       <form onSubmit={handleSubmit} className="post-form">
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="body"
//           placeholder="Body"
//           value={form.body}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default PostForm;


import React, { useState } from 'react';
import { createPost } from '../services/api';

const PostForm = () => {
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
      setForm({ title: '', body: '' });
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-[#0c2c4d] mb-6 text-center">Create New Post</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter post title"
            value={form.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0c2c4d] focus:border-[#0c2c4d]"
          />
        </div>

        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-700">
            Body
          </label>
          <textarea
            name="body"
            id="body"
            rows="4"
            placeholder="Write your post..."
            value={form.body}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0c2c4d] focus:border-[#0c2c4d]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#0c2c4d] text-white py-2 px-4 rounded-md hover:bg-[#092134] transition duration-300"
        >
          Submit Post
        </button>
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
  );
};

export default PostForm;
