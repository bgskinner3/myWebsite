import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  Home,
  NavBar,
  Blog,
  AdminLogin,
  CreateBlogPost,
  Footer,
  SingleBlog,
} from './components';
const token = process.env.REACT_APP_JWT_SECRET;

const Routing = () => {
  const admin = localStorage.getItem(token);

  return (
    <div>
      {admin ? (
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/admin" element={<AdminLogin />} />
            <Route exact path="/write" element={<CreateBlogPost />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/blog/:id" element={<SingleBlog />} />
          </Routes>
        </main>
      ) : (
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/admin" element={<AdminLogin />} />
            <Route exact path="/write" element={<CreateBlogPost />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/blog/:id" element={<SingleBlog />} />
          </Routes>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Routing;
