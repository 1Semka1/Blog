import React, { useEffect, useState } from 'react'
import ArticlesList from '../../ui/articlesList'
import Pagination from '../../common/pagination'
import { paginate } from '../../../utils/paginate'
import GroupList from '../../common/groupList'
import SearchStatus from '../../ui/searchStatus'
import SortField from '../../ui/sortField'
import { orderBy } from 'lodash'
import { useHistory } from 'react-router-dom'
import { useArticles } from '../../../hooks/useArticles'
import { useCategories } from '../../../hooks/useCategories'

const ArticlesListPage = () => {
    const pageSize = 3
    const history = useHistory()
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState()
    const [sortBy, setSortBy] = useState('dataDESC')
    const { articles, removeArticle } = useArticles()
    const { categories, isLoading: categoriesLoading } = useCategories()

    const sortOptions = [
        {
            label: 'Сначала новые',
            value: 'dataDESC',
            sort: (articles) => orderBy(articles, ['date'], ['desc'])
        },
        {
            label: 'Сначала старые',
            value: 'dataASC',
            sort: (articles) => orderBy(articles, ['date'], ['asc'])
        },
        {
            label: 'По рейтингу',
            value: 'rateDESC',
            sort: (articles) => orderBy(articles, ['rate'], ['desc'])
        }
    ]

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedCategory, search])

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSort = ({ target }) => {
        setSortBy(target.value)
    }

    const handleSearch = ({ target }) => {
        setSelectedCategory()
        setSearch(target.value)
    }

    const handleCategorySelect = (item) => {
        setSearch('')
        setSelectedCategory(item)
    }

    const handleDelete = (articleId) => {
        removeArticle(articleId)
    }
    const handleShowArticle = (articleId) => {
        history.push(history.location.pathname + `/${articleId}`)
    }

    const clearFilter = () => {
        setSearch('')
        setSelectedCategory()
    }
    if (articles) {
        const foundArticles = articles.filter((article) =>
            article.topic.toLowerCase().includes(search.toLowerCase())
        )

        const filteredArticles = selectedCategory
            ? articles.filter(
                  (article) => article.category === selectedCategory._id
              )
            : foundArticles
        const count = filteredArticles.length

        const sortedArticles = sortOptions
            .find(({ value }) => value === sortBy)
            .sort(filteredArticles)

        const articleCrop = paginate(sortedArticles, currentPage, pageSize)

        if (!articleCrop.length && currentPage > 1 && !selectedCategory) {
            setCurrentPage((prevState) => prevState - 1)
        }

        return (
            <div className="d-flex justify-content-center">
                {!categoriesLoading && categories.length && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            items={categories}
                            selectedItem={selectedCategory}
                            onItemSelect={handleCategorySelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column align-items-center container-fluid">
                    <div className="col-md-3">
                        <SearchStatus length={count} />
                    </div>
                    <div className=" container-fluid d-flex flex-wrap justify-content-between mb-3">
                        <input
                            className="col-md-3"
                            type="text"
                            name="search"
                            placeholder="Найти..."
                            value={search}
                            onChange={handleSearch}
                        />
                        <div className="col-md-3">
                            <SortField
                                name="sort"
                                value={sortBy}
                                options={sortOptions}
                                onSort={handleSort}
                            />
                        </div>
                    </div>
                    {count > 0 && (
                        <ArticlesList
                            articles={articleCrop}
                            onDelete={handleDelete}
                            onShowArticle={handleShowArticle}
                        />
                    )}
                    <div className="d-flex justify-content-center mt-3">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
    return <h1 className="text-center">Loading...</h1>
}

export default ArticlesListPage
