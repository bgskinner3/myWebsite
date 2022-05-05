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
  Projects,
  EditBlogPost
  
} from './components';


const Routing = () => {

  return (
    <div>
      <main>
        <Routes>
          <Route exact path="/client" element={<Home />} />
          <Route exact path="/client/admin" element={<AdminLogin />} />
          <Route exact path="/client/write" element={<CreateBlogPost />} />
          <Route exact path ="/client/projects" element={<Projects />} />
          <Route exact path="/client/blog" element={<Blog />} />
          <Route exact path="/client/blog/:id" element={<SingleBlog />} />
          <Route exact path="/client/blog/:id/edit" element={<EditBlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Routing;
