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
  EditBlogPost,
  Message,
  AdminMessages,
  PageNotFound,
  AdminCalanderAndToDos,
} from './components';


const Routing = () => {

  return (
    <div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route exact path="/write" element={<CreateBlogPost />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/message" element={<Message />} />
          <Route exact path="/adminmessages" element={<AdminMessages />} />
          <Route
            exact
            path="admincalanderandtodos"
            element={<AdminCalanderAndToDos />}
          />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:id" element={<SingleBlog />} />
          <Route exact path="/blog/:id/edit" element={<EditBlogPost />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Routing;
