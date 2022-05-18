import { gql } from '@apollo/client';

export const GET_ALL_BLOG_POSTS = gql`
  query getAllBlogPosts {
    posts {
      content
      title
      id
      image
      subject
      createdAt
    }
  }
`;

export const GET_SINGLE_BLOG_POST = gql`
  query getSingleBlogPost($postId: ID!) {
    post(id: $postId) {
      content
      title
      image
      subject
      createdAt
    }
  }
`;

export const GET_ALL_MESSAGES = gql`
  query getAllMessages {
    messages {
      id
      content
      read
      email
    }
  }
`;

export const GET_ALL_COMMENTS = gql`
  query getAllComments {
    comments {
      content
      postId
      createdAt
    }
  }
`;

export const GET_ALL_REACTOS = gql`
  query getAllReactos {
    question
    markdownnumber
    completed
    answer
  }
`;

export const GET_SINGLE_REACTO = gql`
  query getSingleReacto($id: ID!) {
    reacto(id: $id) {
      question
      markdownnumber
      completed
      answer
    }
  }
`;

export const GET_ALL_TODOS = gql`
  query getAllTodos {
    todos {
      completed
      content
      importance
      createdAt
    }
  }
`;

export const GET_SINGLE_TODO = gql`
  query getSingleToDo($id: ID!) {
    todo(id: $id) {
      completed
      content
      importance
      createdAt
    }
  }
`;