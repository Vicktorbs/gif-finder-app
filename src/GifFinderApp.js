import React, { useState } from 'react';
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifFinderApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories)
    
    return (
        <>
            <h2>GifFinderApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                { categories.map(category => 
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ) }
            </ol>
        </>
    )
}
export default GifFinderApp;