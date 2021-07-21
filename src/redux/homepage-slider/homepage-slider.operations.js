import { getItems } from '../../utils/client';

const getAllSlides = async () => {
  const getAllSlidesQuery = `
  query {
    getAllSlides {
      items {
        _id
        images {
            large
        }
        show
        order
        link
        title {
            lang
            value
        }
        description {
          lang
          value
        }
    }
   }          
  }`;
  const result = await getItems(getAllSlidesQuery);

  return result?.data?.getAllSlides;
};

export { getAllSlides };
