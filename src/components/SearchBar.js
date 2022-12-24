function SearchBar({ onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit('cars')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input />
            </form>
        </div >
    )
}

export default SearchBar;