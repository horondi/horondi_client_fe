import { getItems } from '../../utils/client';

const getAllNews = async () => {
  const getAllNewsQuery = `query {
    getAllNews {
      items {
        _id
        title {
          value
        }
        author {
          name {
            value
          }
          image 
        }
        text {
          value
        }
        date
        image
      }
    }
  }
  `;
  const result = await getItems(getAllNewsQuery);

  return result?.data?.getAllNews;
};

const getNewsById = async (payload) => {
  const getNewsByIdQuery = `
  query{
    getNewsById(id: $id){
    ... on News{
        __typename
        _id
        title{
          value
        }
        text{
          value
        }
        image
        author{
          name{
            value
          }
          image
        }
        date
      }
    ... on Error {
        message
        statusCode
      }
    }
  }`;
  const result = await getItems(getNewsByIdQuery, { payload });

  return result?.data?.getNewsById;
};

export { getAllNews, getNewsById };