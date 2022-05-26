import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type="search" 
            placeholder="Search Robots" 
            onChange={searchChange} 
        />
    )
}

    // searchChange= (event)=>{
    //     console.log(event.target.value)
    // }

export default SearchBox