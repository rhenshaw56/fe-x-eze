import { createContext, useReducer } from 'react';
import { reducer } from './reducer';


const SearchContext = createContext({});
const searchOptions = {
  search: null,
  minPrice: 100,
  maxPrice: 1000,
  storageOptions: [],
};

const SearchContextProvider = ({ children, value }) => {
  const { query, setQuery} = value;
  const [searchState, dispatch] = useReducer(reducer, searchOptions);

  return (
    <SearchContext.Provider value={{ searchState, dispatch, query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

const SearchContextConsumer = SearchContext.Consumer;


export { SearchContext, SearchContextProvider, SearchContextConsumer };
