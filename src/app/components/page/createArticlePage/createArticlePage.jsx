import React, { useEffect, useState } from 'react'
import { validator } from '../../../utils/validator'
import { validatorConfig } from '../../../utils/validatorConfig'
import SelectField from '../../common/form/selectField'
import TextField from '../../common/form/textField'
import TextAreaField from '../../common/form/textAreaField'
import { useCategories } from '../../../hooks/useCategories'
import { useArticles } from '../../../hooks/useArticles'
import { useHistory } from 'react-router-dom'
import FileField from '../../common/form/fileField'

const CreateArticlePage = () => {
    const history = useHistory()
    const [data, setData] = useState({
        category: '',
        topic: '',
        description: '',
        text: '',
        photo: '',
        file: ''
    })
    const [errors, setErrors] = useState({})
    const [enterError, setEnterError] = useState(null)
    const { categories, isLoading: categoriesLoading } = useCategories()
    const { createArticle } = useArticles()

    useEffect(() => {
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
        try {
            await createArticle(data)
            history.push('/articles')
        } catch (error) {
            setEnterError(error.message)
        }
    }

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    if (!categoriesLoading) {
        return (
            <form onSubmit={handleSubmit}>
                <b>
                    <div className="col-md-3">
                        <SelectField
                            label="Категория статьи"
                            defaultOption="Выберите..."
                            name="category"
                            options={categories}
                            onChange={handleChange}
                            value={data.category}
                            error={errors.category}
                        />
                    </div>
                    <TextField
                        label="Тема"
                        name="topic"
                        value={data.topic}
                        onChange={handleChange}
                        error={errors.topic}
                    />
                    <TextAreaField
                        label="Короткое описание"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        error={errors.description}
                        size={2}
                    />
                    <TextAreaField
                        label="Содержание"
                        name="text"
                        value={data.text}
                        onChange={handleChange}
                        error={errors.text}
                        size={5}
                    />
                    <FileField
                        label="Файл"
                        name="file"
                        onChange={handleChange}
                        error={errors.file}
                    />
                    <TextField
                        label="Ссылка на фотографию"
                        name="photo"
                        value={data.photo}
                        onChange={handleChange}
                    />
                </b>
                {enterError && <p className="text-danger">{enterError}</p>}
                <button
                    className="btn btn-primary w-100 mx-auto"
                    disabled={!isValid}
                >
                    Отправить
                </button>
            </form>
        )
    } else {
        return 'Loading...'
    }
}

export default CreateArticlePage
