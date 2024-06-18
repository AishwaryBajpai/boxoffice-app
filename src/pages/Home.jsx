
import { useState } from 'react';
import { searchForShows,searchForPeople } from '../api/tvmaze';

const Home = () => {
  const [searchStr, setOnSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError ] = useState(null);
  const [SearchOption, setSearchOption ] = useState('shows');

  const OnChangeSearchStr = ev => {
    setOnSearchStr(ev.target.value);

  };

  const onSubmitChange = async ev => {
    ev.preventDefault();

    try{
    setApiDataError(null);
    if(SearchOption === 'shows'){
        const result = await searchForShows(searchStr);
        setApiData(result);
      }else{
        const result = await searchForPeople(searchStr);
        setApiData(result);  
      }
    } catch (error){
        setApiDataError(error);
    }
  };

  const renderApiData = () =>{
    if(apiDataError){
        return <div>Error Occured: {apiDataError.message}</div>
    }
    if(apiData){
            return apiData[0].show ? apiData.map((data) => (
                <div key={data.show.id}>{data.show.name}</div>
            )) : apiData.map((data) => (<div key={data.person.id}>{data.person.name}</div>));
        
    }
    return null;
  }

  const onRadioChange = (ev) =>{
    setSearchOption(ev.target.value);
  };


  return (
    <div>
      <form onSubmit={onSubmitChange}>
        <input type="text" value={searchStr} onChange={OnChangeSearchStr} />

        <label>
            Shows
            <input type="radio" name="search-option" value="shows" checked={SearchOption === 'shows'} onChange={onRadioChange}/>
        </label> 

        <label>
            Actors
            <input type="radio" name="search-option" value="actors" checked={SearchOption==='actors'} onChange={onRadioChange}/>
        </label>
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
