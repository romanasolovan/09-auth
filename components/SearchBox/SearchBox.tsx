import css from './SearchBox.module.css';

interface SearchBoxProps {
    onChange: (value: string) => void;
}


const SearchBox = ({ onChange }: SearchBoxProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        onChange(event.target.value);
    
    return (
        <input
            onChange={handleChange}
            type="text"
            className={css.input}
            placeholder="Search notes"
        />
    );
};

export default SearchBox;