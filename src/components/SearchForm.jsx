import { useState } from 'react';

const SearchForm = ({ onSubmitChange}) =>{
    const [searchStr, setOnSearchStr] = useState('');
    const [SearchOption, setSearchOption ] = useState('shows');

    const OnChangeSearchStr = ev => {
        setOnSearchStr(ev.target.value);
    };

    const onRadioChange = (ev) =>{
        setSearchOption(ev.target.value);
    };

    const OnSubmitForm = (ev) =>{
        ev.preventDefault();

        const options = {
            q: searchStr,
            SearchOption,
        };
        onSubmitChange(options);
    };

    return (
        <form onSubmit={OnSubmitForm}>
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
    );
};


export default SearchForm;