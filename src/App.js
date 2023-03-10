import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";
import './App.css';

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async term => {
        setImages(await searchImages(term));
    }

    return (
        <div className="app">
            <h1>Unsplash API React App</h1>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    )
}

export default App;