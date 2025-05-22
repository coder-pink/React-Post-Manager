
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchPosts } from './services/api';
import PostForm from './pages/PostForm';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';



const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data.slice(0, 20)); // you can increase or decrease
      } catch (err) {
        console.error(err.message);
      }
    };
    loadPosts();
  }, []);


  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage posts={posts} />} />
            <Route
              path="/create"
              element={
                <section className="py-8 px-4">
                  <PostForm setPosts={setPosts} />
                </section>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
