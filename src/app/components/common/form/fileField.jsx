import React from 'react'
import PropTypes from 'prop-types'

const FileField = ({ label, name, error, onChange }) => {
    const getInputClasses = () => {
        return 'form-control ' + (error ? 'is-invalid' : '')
    }

    const handleChange = ({ target }) => {
        console.log(target)
        onChange({ [target.name]: target.value })
    }

    return (
        <>
            <div>
                <label htmlFor={name}>{label} в формате (.pdf)</label>
                <div className="input-group has-validation mb-3">
                    <div>
                        <input
                            type="file"
                            name={name}
                            className={getInputClasses()}
                            id={name}
                            accept=".pdf"
                            onChange={handleChange}
                            placeholder=".pdf"
                        />
                        {error && (
                            <div className="invalid-feedback">{error}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

FileField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
}

export default FileField
