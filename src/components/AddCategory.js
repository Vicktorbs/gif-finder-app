import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            // Con el arrow function categories es el estado actual del setCategories, asi se hacia sin tener que exportar la variable categories
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('')
        }
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
            <p className="preview">{ inputValue }</p>
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory