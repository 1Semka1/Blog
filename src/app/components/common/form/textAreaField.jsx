import React from 'react'
import PropTypes from 'prop-types'

const TextAreaField = ({ label, name, value, onChange, error, size }) => {
    const getInputClasses = () => {
        return 'form-control ' + (error ? 'is-invalid' : '')
    }

    const handleChange = ({ target }) => {
        onChange({ [target.name]: target.value })
    }
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <textarea
                    rows={size}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={getInputClasses()}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}

TextAreaField.defaultProps = {
    type: 'text'
}

TextAreaField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.number
}

export default TextAreaField
