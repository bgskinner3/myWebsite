import React, { useState, useEffect } from 'react';
import { PageNotFound } from '.';
import Markdown from 'markdown-to-jsx';
const token = process.env.REACT_APP_JWT_SECRET;

const AdminRenderMarkDown = (props) => {
  const [markdown, setMark] = useState('');
  const admin = localStorage.getItem(token);

  const {number} = props
  
  useEffect(() => {
    import('./markdown/test.md')
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setMark(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return admin ? (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  ) : (
    <PageNotFound />
  );
};

export default AdminRenderMarkDown;
