import { gql } from '@apollo/client';
import getItems, { setItems, client } from '../../utils/client';

const getComments = async (id) => {
  const res = await getItems(
    `query($id: ID!) {
        getAllCommentsByProduct(productId: $id) {
          ... on Comment {
            _id
            text
            date
            user {
              email
              name
              images {
                thumbnail 
              }
            }
          }
        }
    }`,
    {
      id
    }
  );
  await client.resetStore();
  return res.data.getAllCommentsByProduct;
};

const changeRate = (payload) =>
  setItems(
    `mutation($product: ID!, $rate: Int!) {
        addRate(product: $product, userRate: { rate: $rate }) {
          ... on Product {
            rate
          }
        }
    }`,
    payload
  );

const addComment = async (payload) => {
  const result = await client.mutate({
    mutation: gql`
      mutation(
        $product: ID!
        $email: String!
        $firstName: String
        $show: Boolean!
        $text: String
        $images: ImageSetInput
      ) {
        addComment(
          productId: $product
          comment: {
            text: $text
            show: $show
            user: { email: $email, name: $firstName, images: $images }
            product: $product
          }
        ) {
          ... on Comment {
            _id
            text
            date
            user {
              name
              email
              images {
                thumbnail
              }
            }
          }
        }
      }
    `,
    variables: payload,
    fetchPolicy: 'no-cache'
  });
  await client.resetStore();
  return result;
};

const deleteComment = async (payload) => {
  const result = await client.mutate({
    mutation: gql`
      mutation($comment: ID!) {
        deleteComment(id: $comment) {
          ... on Comment {
            _id
            text
            date
          }
        }
      }
    `,
    variables: payload,
    fetchPolicy: 'no-cache'
  });
  await client.resetStore();
  return result;
};

const updateComment = async (payload) => {
  const result = await client.mutate({
    mutation: gql`
      mutation(
        $comment: ID!
        $product: ID!
        $email: String!
        $show: Boolean!
        $text: String
        $firstName: String
        $images: ImageSetInput
      ) {
        updateComment(
          id: $comment
          comment: {
            text: $text
            show: $show
            user: { email: $email, name: $firstName, images: $images }
            product: $product
          }
        ) {
          ... on Comment {
            _id
            text
            date
            user {
              name
              email
              images {
                thumbnail
              }
            }
          }
        }
      }
    `,
    variables: payload,
    fetchPolicy: 'no-cache'
  });
  await client.resetStore();
  return result;
};

export { getComments, changeRate, addComment, deleteComment, updateComment };
