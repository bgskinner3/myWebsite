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
