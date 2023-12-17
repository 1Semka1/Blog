import React from 'react'
import PropTypes from 'prop-types'

const SearchStatus = ({ length }) => {
    const renderPhrase = (length) => {
        if (length === 0) {
            return 'Нет статей'
        }
        if (length % 100 >= 10 && length % 100 <= 20) {
            return `${length} статей`
        }
        if (length % 10 === 1) {
            return `${length} статья`
        } else {
            return length % 10 > 1 && length % 10 < 5
                ? `${length} статьи`
                : `${length} статей`
        }
    }
    return (
        <h2 className="text-center">
            <span
                className={
                    length === 0 ? 'badge bg-danger' : 'badge bg-primary'
                }
            >
                {renderPhrase(length)}
            </span>
        </h2>
    )
}

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
}

export default SearchStatus
