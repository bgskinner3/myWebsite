import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  Home,
  Blog,
  AdminLogin,
  CreateBlogPost,
  Footer,
  SingleBlog,
  Projects
} from './components';


const Routing = () => {

  return (
    <div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route exact path="/write" element={<CreateBlogPost />} />
          <Route exact path ="/projects" element={<Projects />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:id" element={<SingleBlog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Routing;
