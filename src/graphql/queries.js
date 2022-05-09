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
