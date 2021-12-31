import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({ title, url }) => {
    return (
        <a href={ url } target='_blank' rel='noreferrer' className="card card-background">
            <div className="animate__animated animate__fadeIn">
                <img src={ url } alt={ title } />
                <p>{ title }</p>
            </div>
        </a>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}