const users = [
    {
        id: '67rdca3eeb7f6fgeed471815',
        name: 'Иван Иванов',
        email: 'IvanIvanov133331@mail.ru',
        sex: 'male'
    },
    {
        id: '67rdca3eeb7f6fgeed471816',
        name: 'Алина Петрова',
        email: 'AlinaPetrova1576@mail.ru',
        sex: 'female'
    },
    {
        id: '67rdca3eeb7f6fgeed471817',
        name: 'Петр Сидоров',
        email: 'PetrS1d0r0v1994@mail.ru',
        sex: 'male'
    },
    {
        id: '67rdca3eeb7f6fgeed471818',
        name: 'Елена Козлова',
        email: 'HelenaKozlova89654@mail.ru',
        sex: 'female'
    },
    {
        id: '67rdca3eeb7f6fgeed471819',
        name: 'Максим Зайцев',
        email: 'MaxZayas1998@mail.ru',
        sex: 'male'
    },
    {
        id: '67rdca3eeb7f6fgeed471820',
        name: 'Алексей Григорьев',
        email: 'AlexGrig0r5467@mail.ru',
        sex: 'male'
    },
    {
        id: '67rdca3eeb7f6fgeed471821',
        name: 'Ольга Михайлова',
        email: 'OlgaMihaylovna43290765@mail.ru',
        sex: 'female'
    },
    {
        id: '67rdca3eeb7f6fgeed471822',
        name: 'Дмитрий Кузнецов',
        email: 'KuzDmitry120495@mail.ru',
        sex: 'male'
    },
    {
        id: '67rdca3eeb7f6fgeed471823',
        name: 'Семён Пономарёв',
        email: 'SemPonomarev2000@mail.ru',
        sex: 'male'
    },
    {
        id: '67rdca3eeb7f6fgeed471824',
        name: 'Елена Петрова',
        email: 'HelenaPetrova04111996@mail.ru',
        sex: 'female'
    },
    {
        id: '67rdca3eeb7f6fgeed47181f',
        name: 'Анна Смирнова',
        email: 'Anna7641231@mail.ru',
        sex: 'female'
    },
    {
        id: '67rdca3eeb7f6fgeed47181r',
        name: 'Иван Корнилов',
        email: 'KornilovIvan190599@mail.ru',
        sex: 'male'
    },
    {
        id: '67rdca3eeb7f6fgeed47181t',
        name: 'Анна Аксёнова',
        email: 'AksenovaAnnusha333@mail.ru',
        sex: 'male'
    },
    {
        id: '67rdca3eeb7f6fgeed47181y',
        name: 'Анна Бахтина',
        email: 'BahtinaAnna290901@mail.ru',
        sex: 'male'
    },
    {
        id: '67rdca3eeb7f6fgeed47181i',
        name: 'Денис Хавлин',
        email: 'HaVlInDen17771@mail.ru',
        sex: 'male'
    },
    {
        id: '67rdca3eeb7f6fgeed47181o',
        name: 'Евгений Макаров',
        email: 'EvGenMakarov@mail.ru',
        sex: 'male'
    },
    {
        id: '67rdca3eeb7f6fgeed47181p',
        name: 'Владимир Макаров',
        email: 'VladimirMakarov@mail.ru',
        sex: 'male'
    }
]
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(users)
        }, 2000)
    })

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(users.find((user) => user.id === id))
        }, 1000)
    })
export default {
    fetchAll,
    getById
}
