import './search-box.style.css'



interface ISearchBoxProps {
    placeholder?: string | null;
    handleChange: (a: string) => void;
}

export const SearchBox = ({ placeholder, handleChange }: ISearchBoxProps) => (
    <input 
    className='search'
    type='search' 
    placeholder={ placeholder } 
    onChange={handleChange }
    />

)