const comments = [
    {
        id: '67rdca3eeb7f6fg',
        userId: '67rdca3eeb7f6fgeed47181t',
        articleId: '8',
        content: 'Круто!',
        created_at: '1633576399367'
    },
    {
        id: '67rdca3eeb7f6fgdasd',
        articleId: '5',
        userId: '67rdca3eeb7f6fgeed471815',
        content: 'Кто, если не мы позаботимся об окружающем мире?',
        created_at: '1633573058520'
    },

    {
        id: 'VbhRc5YT6PJDM2yVHPmrk',
        articleId: 'RtcX3ItYwAb3AMg_DYIx5',
        userId: 'VzN5H9bLHOYGUsZGHe1PgLWSWsJ2',
        content: 'Люблю беспилотники!',
        created_at: '1686584373795'
    }
]

if (!localStorage.getItem('comments')) {
    localStorage.setItem('comments', JSON.stringify(comments))
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(comments)
        }, 200)
    })

const fetchCommentsForArticle = (articleId) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem('comments')).filter(
                    (c) => c.articleId === articleId
                )
            )
        }, 200)
    })

const add = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const comments = JSON.parse(localStorage.getItem('comments'))
            const newComment = {
                id: Math.random().toString(36).substr(2, 9),
                ...data,
                created_at: Date.now().toString()
            }
            comments.push(newComment)
            localStorage.setItem('comments', JSON.stringify(comments))
            resolve(newComment)
        }, 200)
    })

const remove = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const comments = JSON.parse(localStorage.getItem('comments'))
            const newComments = comments.filter((x) => x.id !== id)
            localStorage.setItem('comments', JSON.stringify(newComments))
            resolve(id)
        }, 200)
    })

export default {
    fetchAll,
    fetchCommentsForArticle,
    add,
    remove
}
