import articles from '../mockData/articles.json'
import users from '../mockData/users.json'
import categories from '../mockData/categories.json'
import httpService from '../services/http.service'
import { nanoid } from 'nanoid'

const useMockData = () => {
    async function initialize() {
        try {
            for (const category of categories) {
                await httpService.put('category/' + category._id, category)
            }
            for (const article of articles) {
                const art = { ...article, _id: nanoid() }
                await httpService.put('article/' + art._id, art)
            }
            for (const user of users) {
                await httpService.put('user/' + user._id, {
                    ...user,
                    avatar: `https://api.dicebear.com/6.x/thumbs/svg?seed=${(
                        Math.random() + 1
                    )
                        .toString(36)
                        .substring(2)}`
                })
            }
        } catch (error) {}
    }
    return initialize
}

export default useMockData
