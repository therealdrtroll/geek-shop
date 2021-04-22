import * as actionTypes from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  productsTotal: 0,
  products: [],
  brands: [],
  categories: [],
};

export const productReducer = (state = initState, { type, data }) => {
  switch (type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: data.data,
        productsTotal: data.totalProducts,
        brands: data.brands,
        categories: data.categories,
      };

    case actionTypes.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
