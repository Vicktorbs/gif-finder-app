import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    // key: sgatASouL6QA0OloiTwxS5gAVHGXDGET
    // const [images, setImages] = useState([])
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <li className="cards-container" key={ category }>
                <h3 className="animate__animated animate__fadeIn card-title">{ category }</h3>
                { loading && <p>Loading...</p> }
                <div className="card-grid">
                    { 
                        images.map(image => 
                            <GifGridItem { ...image } key={ image.id } />
                        )
                    }
                </div>
            </li>
        </>
    )
}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}