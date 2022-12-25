import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit('cars')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div >
    )
}

export default SearchBar;