

import React, { useState } from 'react';

const PostList = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
        📰 Latest Posts
      </h2>

      <div className="grid gap-6 md:grid-cols-2 ">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 transition-transform hover:scale-[1.02] hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{post.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full border text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-700 ${
                currentPage === i + 1
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
              aria-label={`Go to page ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
