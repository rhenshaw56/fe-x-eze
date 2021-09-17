import { createContext, useReducer } from 'react';
import { reducer } from './reducer';


const SearchContext = createContext({});
const searchOptions = {
  annualSpend: null,
  annualOrders: null,
  nosOfEngineers: null,
  showCharts: false,
  estimatedCostOverTime: [],
  cummulativeLeadtimeOvertime: [],
  engineeringOverheadOvertime: []
};

const SearchContextProvider = ({ children }) => {
  const [SearchState, dispatch] = useReducer(reducer, searchOptions);

  return (
    <SearchContext.Provider value={{ SearchState, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

const SearchContextConsumer = SearchContext.Consumer;


export { SearchContext, SearchContextProvider, SearchContextConsumer };
