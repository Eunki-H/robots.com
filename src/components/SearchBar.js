import React from 'react';

const SearchBar = ({getSearchField}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Type a robot'
                onChange={getSearchField}
            />
        </div>
    );
}

export default SearchBar;