import React from 'react'
import PropTypes from 'prop-types'

const SortField = ({ name, value, options, onSort }) => {
    return (
        <select
            className="form-select"
            value={value}
            onChange={onSort}
            id={name}
            name={name}
        >
            {options.map((option) => (
                <option key={option.label} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

SortField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            sort: PropTypes.func.isRequired
        })
    ).isRequired,
    onSort: PropTypes.func.isRequired
}

export default SortField
