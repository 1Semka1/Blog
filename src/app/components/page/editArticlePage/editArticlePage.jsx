import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import TextField from '../../common/form/textField'
import SelectField from '../../common/form/selectField'
import { validator } from '../../../utils/validator'
import { validatorConfig } from '../../../utils/validatorConfig'
import TextAreaField from '../../common/form/textAreaField'
import { useArticles } from '../../../hooks/useArticles'
import { useCategories } from '../../../hooks/useCategories'

const EditArticlePage = () => {
    const history = useHistory()
    const { articleId } = useParams()
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [errors, setErrors] = useState({})
    const { categories, isLoading: categoriesLoading } = useCategories()
    const { getArticle, updateArticle } = useArticles()
    const currentArticle = getArticle(articleId)

    useEffect(() => {
        if (!categoriesLoading && currentArticle && !data) {
            setData({
                ...currentArticle
            })
        }
    }, [categoriesLoading, currentArticle, data])

    useEffect(() => {
        if (data && isLoading) {
            setLoading(false)
        }
        validate()
    }, [data])

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            ...target
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        await updateArticle(data)
        history.push(`/articles/${articleId}`)
    }

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    return (
        <div className="container mt-5">
            {!isLoading && Object.keys(categories).length > 0 ? (
                <>
                    <button
                        className="btn btn-primary"
                        onClick={() => history.goBack()}
                    >
                        <i className="bi bi-caret-left-fill"></i> Назад
                    </button>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 shadow p-4">
                            <form onSubmit={handleSubmit}>
                                <b>
                                    <SelectField
                                        label="Категория"
                                        name="category"
                                        defaultOption="Выберите..."
                                        value={data.category}
                                        options={categories}
                                        onChange={handleChange}
                                        error={errors.category}
                                    />
                                    <TextField
                                        label="Тема"
                                        name="topic"
                                        value={data.topic}
                                        onChange={handleChange}
                                        error={errors.topic}
                                    />

                                    <TextAreaField
                                        label="Описание"
                                        name="description"
                                        value={data.description}
                                        onChange={handleChange}
                                        error={errors.description}
                                        size={3}
                                    />
                                    <TextAreaField
                                        label="Текст"
                                        name="text"
                                        value={data.text}
                                        onChange={handleChange}
                                        error={errors.text}
                                        size={25}
                                    />
                                    <TextField
                                        label="Ссылка на фотографию"
                                        name="photo"
                                        value={data.photo}
                                        onChange={handleChange}
                                    />
                                </b>
                                <button
                                    className="btn btn-primary w-100 mx-auto"
                                    disabled={!isValid}
                                >
                                    Отправить
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <h1 className="text-center">Loading...</h1>
            )}
        </div>
    )
}

export default EditArticlePage
