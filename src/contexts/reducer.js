const initialState = {
  search: null,
  minPrice: null,
  maxPrice: null,
  storageOptions: [],
};

export const reducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case "UPDATE_SEARCH_FIELD":
      console.log('e', data);
      return {
        ...state,
        ...data
      };
    case "UPDATE_MIN_PRICE":
      return {
        ...state,
        ...data
      };
    case "UPDATE_MAX_PRICE":
        return {
          ...state,
          ...data
        };
    case "UPDATE_STORAGE_OPTIONS":
      return {
        ...state,
        ...data
      };
    default:
      return state;
  }
};
