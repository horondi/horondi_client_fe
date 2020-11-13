import { gql } from '@apollo/client';
import { client } from '../../utils/client';
import { getFromLocalStorage } from '../../services/local-storage.service';
import { patternTranslations } from '../../translations/pattern.translations';

export const getAllPatterns = async (skip, limit) => {
  const result = await client.query({
    variables: {
      skip,
      limit
    },
    query: gql`
      query($skip: Int, $limit: Int) {
        getAllPatterns(skip: $skip, limit: $limit) {
          items {
            _id
            name {
              lang
              value
            }
            material
            available
            images {
              medium
            }
          }
          count
        }
      }
    `
  });
  client.resetStore();

  return result.data.getAllPatterns;
};

export const getPatternById = async (id) => {
  const result = await client.query({
    variables: { id },
    query: gql`
      query($id: ID!) {
        getPatternById(id: $id) {
          ... on Pattern {
            _id
            name {
              value
            }
            description {
              value
            }
            material
            handmade
            available
            images {
              medium
            }
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });

  return result.data.getPatternById;
};

export const deletePattern = async (id) => {
  const token = getFromLocalStorage('HORONDI_AUTH_TOKEN');

  const result = await client.mutate({
    variables: { id },
    context: { headers: { token } },
    mutation: gql`
      mutation($id: ID!) {
        deletePattern(id: $id) {
          ... on Pattern {
            _id
            name {
              lang
              value
            }
            material
            available
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  client.resetStore();

  return result.data.deletePattern;
};

export const createPattern = async (payload) => {
  const token = getFromLocalStorage('HORONDI_AUTH_TOKEN');

  const result = await client.mutate({
    context: { headers: { token } },
    variables: payload,

    mutation: gql`
      mutation($pattern: PatternInput!, $image: Upload!) {
        addPattern(pattern: $pattern, image: $image) {
          ... on Pattern {
            _id
            name {
              lang
              value
            }
            material
            available
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  client.resetStore();

  return result.data.addPattern;
};

export const updatePattern = async (payload) => {
  const token = getFromLocalStorage('HORONDI_AUTH_TOKEN');

  const result = await client.mutate({
    context: { headers: { token } },
    variables: payload,
    mutation: gql`
      mutation($id: ID!, $pattern: PatternInput!, $image: Upload!) {
        updatePattern(id: $id, pattern: $pattern, image: $image) {
          ... on Pattern {
            _id
            name {
              lang
              value
            }
            material
            available
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  client.resetStore();

  return result.data.updatePattern;
};
