import { ChangeEventHandler } from 'react';

import './search-box.style.css'


type SearchBoxProps = { 
    placeholder?: string;
    handleChange: ChangeEventHandler;
}

export const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => (
    <input 
    className='search'
    type='search' 
    placeholder={ placeholder } 
    onChange={ handleChange }
    />

)