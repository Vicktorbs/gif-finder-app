import React, { useState } from 'react';
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifFinderApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories)
    console.log(categories);
    
    return (
        <>
            <h2>GifFinderApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ul>
                { categories.length === 0 && <p className='empty-area'>Busca gifs</p>}
                { categories.map(category => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                ) }
            </ul>
        </>
    )
}
export default GifFinderApp;