import { ChangeEventHandler } from 'react';

import './search-box.style.css'


type SearchBoxProps = { 
    placeholder?: string;
    handleChange: (event: ChangeEventHandler<HTMLInputElement> ) => void;
}

export const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => (
    <input 
    className='search'
    type='search' 
    placeholder={ placeholder } 
    onChange={ handleChange }
    />

)