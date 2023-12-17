import React from 'react'
import PropTypes from 'prop-types'
import ArticleCard from './articleCard'

const ArticlesList = ({ articles, onDelete, onShowArticle }) => {
    return (
        <div className="container-fluid row p-0">
            {articles.map((article) => (
                <ArticleCard
                    key={article._id}
                    article={article}
                    onDelete={onDelete}
                    onShowArticle={onShowArticle}
                />
            ))}
        </div>
    )
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onShowArticle: PropTypes.func.isRequired
}

export default ArticlesList
