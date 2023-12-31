import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
    items,
    selectedItem,
    onItemSelect,
    valueProperty,
    contentProperty
}) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li
                    key={items[item][valueProperty]}
                    className={
                        'list-group-item' +
                        (items[item] === selectedItem ? ' active' : '')
                    }
                    onClick={() => onItemSelect(items[item])}
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    )
}

GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name'
}

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    selectedItem: PropTypes.object,
    onItemSelect: PropTypes.func,
    contentProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired
}

export default GroupList
