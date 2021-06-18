import { SET_HOME_IMAGE_LOOKS, SET_HOME_IMAGE_LOOKS_LOADING } from './home-page-looks.types';

export const initialState = {
  imageList: [],
  homeImagesLoading: false
};

const homePageImagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_HOME_IMAGE_LOOKS:
      return {
        ...state,
        imageList: action.payload
      };

    case SET_HOME_IMAGE_LOOKS_LOADING:
      return {
        ...state,
        homeImagesLoading: action.payload
      };

    default:
      return state;
  }
};

export default homePageImagesReducer;
