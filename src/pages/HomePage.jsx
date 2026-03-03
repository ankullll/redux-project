import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import Resultgrid from '../components/ResultGrid'
import { useSelector } from 'react-redux';
export const HomePage = () => {
     const { query} = useSelector(
    (store) => store.search,
  );
  return (
      <div>
        
      <SearchBar />
      {query !=''?<div>
        <Tabs />
      <Resultgrid />
      </div>:''}
      
    </div>
  );
};
