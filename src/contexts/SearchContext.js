import { createContext, useReducer } from 'react';
import { reducer } from './reducer';


const SearchContext = createContext({});
const searchOptions = {
  search: null,
  minPrice: null,
  maxPrice: null,
  storageOptions: [],
};

const SearchContextProvider = ({ children }) => {
  const [searchState, dispatch] = useReducer(reducer, searchOptions);

  return (
    <SearchContext.Provider value={{ searchState, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

const SearchContextConsumer = SearchContext.Consumer;


export { SearchContext, SearchContextProvider, SearchContextConsumer };
