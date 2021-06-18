import { getItems } from '../../../utils/client';

export const getModelForConstructor = async () => {
  const getModelForConstructorQuery = `
    query {
      getModelsForConstructor {
        ... on Model {
          _id
          name {
            value
          }
        }
      }
    }
  `;
  const result = await getItems(getModelForConstructorQuery);

  if (result?.data?.getModelsForConstructor?.message) {
    throw new Error(result.data.getModelsForConstructor.message);
  }

  return result?.data?.getModelsForConstructor;
};

export const getModelById = async (id) => {
  const getModelByIdQuery = `
 query($id: ID!) {
  getModelById(id: $id) {
    ... on Model {
      _id
      name {
        value
      }
      category {
        _id
      }
      description {
        value
      }
      images {
        medium
      }
      priority
      show
      availableForConstructor
      eligibleOptions {
        constructorBasic {
          _id
          name {
            value
          }
        }
        constructorPattern {
          _id
          name {
            value
          }
        }
        constructorFrontPocket {
          _id
          name {
            value
          }
        }
        constructorBottom {
          _id
          name {
            value
          }
        }
      }
    }
    ... on Error {
      message
      statusCode
    }
  }
}
`;
  const result = await getItems(getModelByIdQuery, { id });
  if (result?.data?.getModelById?.message) {
    throw new Error(result.data.getModelById.message);
  }

  return result?.data?.getModelById;
};
