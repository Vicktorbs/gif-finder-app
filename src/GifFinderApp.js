import React, { useState } from 'react';
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifFinderApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories)
    
    return (
        <>
            <h2>GiftFinderApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ul>
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