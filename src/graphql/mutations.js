import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      content
      title
      image
      subject
    }
  }
`;

export const UPDATE_POST_MUTATION = gql`
  mutation updatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      id
      content
      title
      image
      subject
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation DeletePost($deletePostId: ID!) {
    deletePost(id: $deletePostId) {
      id
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_MESSAGE_MUTATION = gql`
  mutation createMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
      content
      read
      email
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      content
      id
    }
  }
`;

export const UPDATE_MESSAGE_MUTATION = gql`
  mutation updateMessage($input: UpdateMessageInput!) {
    updateMessage(input: $input) {
      id
      read
    }
  }
`;

export const CREATE_REACTO_MUTATION = gql`
  mutation createReacto($input: CreateReactoInput!) {
    createReacto(input: $input) {
      question
      markdownnumber
      completed
      answer
    }
  }
`;
export const UPDATE_REACTO_MUTATION = gql`
  mutation createReacto($input: UpdateReactoInput!) {
    createReacto(input: $input) {
      id
      question
      markdownnumber
      completed
      answer
    }
  }
`;
export const CREATE_TODO_MUTATION = gql`
  mutation createReacto($input: CreateToDoInput!) {
    createReacto(input: $input) {
      completed
      content
      importance
    }
  }
`;

export const UPDATE_TODO_MUTATION = gql`
  mutation createReacto($input: UpdateToDoInput!) {
    createReacto(input: $input) {
      id
      completed
      content
      importance
    }
  }
`;
