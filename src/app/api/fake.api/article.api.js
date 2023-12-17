import { categories } from './categories.api'

const articles = [
    {
        id: '1',
        topic: 'Исследование эффектов гравитации на движение планет',
        description:
            'Статья рассматривает влияние гравитации на орбитальное движение планет вокруг звезды.',
        text: 'Орбитальное движение планет вокруг звезды определяется силами гравитационного притяжения...',
        category: categories.physics,
        date: '2022.01.15',
        author: 'Иван Иванов',
        photo: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: '2',
        topic: 'Методы изучения молекулярной структуры белков',
        description:
            'Статья описывает различные методы, применяемые в изучении молекулярной структуры белков.',
        text: 'Молекулярная структура белков является ключевым аспектом их функции...',
        category: categories.biology,
        date: '2021.11.25',
        author: 'Алина Петрова',
        photo: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: '3',
        topic: 'Анализ энергетического потенциала ветряных электростанций',
        description:
            'Статья анализирует энергетический потенциал ветряных электростанций и возможные пути его оптимизации.',
        text: 'Ветряные электростанции являются одним из важных источников возобновляемой энергии...',
        category: categories.engineering,
        date: '2021.10.10',
        author: 'Петр Сидоров',
        photo: 'https://plus.unsplash.com/premium_photo-1679850339987-61279ec7aaa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2luZCUyMGVuZXJneXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: '4',
        topic: 'Роль генетических мутаций в развитии раковых опухолей',
        description:
            'Статья исследует роль генетических мутаций в развитии раковых опухолей и их влияние на эволюцию опухолевых клеток.',
        text: 'Генетические мутации являются одним из ключевых факторов в развитии раковых опухолей...',
        category: categories.biology,
        date: '2021.09.05',
        author: 'Елена Козлова',
        photo: 'https://images.unsplash.com/photo-1631048005681-79a19681e4fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: '5',
        topic: 'Исследование влияния климатических изменений на океанские экосистемы',
        description:
            'Статья рассматривает влияние климатических изменений на океанские экосистемы и их последствия для морской биологии.',
        text: 'Климатические изменения оказывают значительное влияние на океанские экосистемы, включая изменение температуры воды, уровня кислотности и распределения водных масс...',
        category: categories.environmental,
        date: '2021.07.20',
        author: 'Максим Зайцев',
        photo: 'https://images.unsplash.com/photo-1562089727-90aa996a6f18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    },
    {
        id: '6',
        topic: 'Новые подходы в лечении болезни Паркинсона',
        description:
            'Статья описывает новые подходы и методы, используемые в лечении болезни Паркинсона на основе последних научных исследований.',
        text: 'Болезнь Паркинсона является нейродегенеративным заболеванием нервной системы...',
        category: categories.medicine,
        date: '2021.06.12',
        author: 'Алексей Григорьев',
        photo: 'https://plus.unsplash.com/premium_photo-1669428846195-a757b0ddedd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1lZGljYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: '7',
        topic: 'Оптимизация производства с использованием методов искусственного интеллекта',
        description:
            'Статья рассматривает применение методов искусственного интеллекта в оптимизации производственных процессов.',
        text: 'Методы искусственного интеллекта находят широкое применение в оптимизации производства...',
        category: categories.computerScience,
        date: '2021.04.28',
        author: 'Ольга Михайлова',
        photo: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: '8',
        topic: 'Исследование влияния генетических факторов на развитие сердечно-сосудистых заболеваний',
        description:
            'Статья анализирует влияние генетических факторов на развитие сердечно-сосудистых заболеваний.',
        text: 'Генетические факторы играют важную роль в развитии сердечно-сосудистых заболеваний...',
        category: categories.medicine,
        date: '2021.03.15',
        author: 'Дмитрий Кузнецов',
        photo: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: '9',
        topic: 'Вещества и свойства',
        description:
            'Каким образом вещества связаны со своими физическими свойствами?',
        text: 'Существует множество факторов, которые влияют на свойства веществ. Некоторые из них могут быть объяснены на молекулярном уровне, например, полюсность молекул, взаимодействия водородных связей и диполь-дипольных взаимодействий. Другие факторы, такие как температура и давление, могут быть объяснены на уровне макроскопических свойств вещества. В целом, понимание этих связей может помочь в изучении свойств новых веществ и разработке новых материалов.',
        category: categories.сhemistry,
        date: '2023.04.19',
        author: 'Семён Пономарёв',
        photo: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: '10',
        topic: 'Применение нанотехнологий в медицине',
        description:
            'Статья рассматривает применение нанотехнологий в медицинской практике, включая диагностику, лечение и контроль заболеваний.',
        text: 'Нанотехнологии предлагают новые возможности в медицине, позволяя проводить более точную диагностику, эффективное лечение и контроль заболеваний...',
        category: categories.engineering,
        date: '2021.02.05',
        author: 'Елена Петрова',
        photo: 'https://images.unsplash.com/photo-1576141546153-3e04370b5ff7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1524&q=80'
    },
    {
        id: '11',
        topic: 'Роль микробиома в здоровье человека',
        description:
            'Статья анализирует влияние микробиома - совокупности микроорганизмов, населяющих организм человека, на его здоровье и иммунную систему.',
        text: 'Микробиом играет важную роль в здоровье человека, влияя на иммунную систему, обмен веществ и другие аспекты здоровья...',
        category: categories.medicine,
        date: '2021.01.15',
        author: 'Анна Смирнова',
        photo: 'https://plus.unsplash.com/premium_photo-1676325102583-0839e57d7a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: '12',
        topic: 'Экономический рост',
        description: 'Какие факторы оказывают влияние на экономический рост?',
        text: 'Долгое время ученые и экономисты искали ответ на вопрос, как достичь экономического роста в стране и какие факторы на это влияют. Сегодня известно, что для стимулирования экономического роста нужны стабильные правительственные институты, высокий уровень образования населения, технологический прогресс и эффективность рынка труда.',
        category: categories.economy,
        date: '2022.03.15',
        author: 'Иван Корнилов',
        photo: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: '13',
        topic: 'Мировая торговля',
        description:
            'Какие основные тенденции можно наблюдать в мировой торговле?',
        text: 'Мировая торговля активно развивается на протяжении последних десятилетий. Основные направления торговли - это сырьевые материалы, продукты питания, товары широкого потребления, а также услуги. Сегодня наблюдается усиление конкуренции на мировом рынке и развитие новых форм торговли, таких как электронная коммерция.',
        category: categories.economy,
        date: '2022.05.20',
        author: 'Анна Аксёнова',
        photo: 'https://images.unsplash.com/photo-1597334948330-38795f25d05d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    },
    {
        id: '14',
        topic: 'Химические реакции',
        description: 'Описание нескольких типов химических реакций',
        text: 'Химические реакции могут происходить по разным механизмам и классифицируются в соответствии с этими механизмами. Например, одной из основных классификаций является разделение реакций на реакции с образованием осадка, реакции окисления-восстановления и реакции кислоты-щелочи. Каждый тип реакции имеет свои характеристики и может использоваться для решения разных задач, как в химических лабораториях, так и в промышленности.',
        category: categories.сhemistry,
        date: '2023.04.18',
        author: 'Анна Бахтина',
        photo: 'https://images.unsplash.com/photo-1615871155311-31296e92174b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    },
    {
        id: '15',
        topic: 'Финансовые рынки',
        description:
            'Какие основные факторы влияют на состояние финансовых рынков?',
        text: 'Финансовые рынки являются одним из самых важных элементов современной экономики. Они оказывают влияние на кредитование, инвестирование и общее экономическое развитие. Факторы, влияющие на состояние финансовых рынков, включают в себя государственную политику, экономические показатели, изменения в правовой сфере, а также геополитические риски.',
        category: categories.economy,
        date: '2022.07.10',
        author: 'Денис Хавлин',
        photo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: '16',
        topic: 'Использование беспилотных летательных аппаратов в сельском хозяйстве',
        description:
            'Рассматривается применение БПЛА в качестве помощника в сельскохозяйственном производстве',
        text: 'В компании ООО "Новые технологии" всерьёз интересуются этой темой, ведь в последние годы беспилотные летательные аппараты стали все более популярными в сельском хозяйстве. Они могут использоваться для обнаружения болезней растений, определения уровня урожайности, мониторинга погодных условий и т.д. В результате этого повышается эффективность сельскохозяйственного производства и уменьшается количество затрат на его осуществление.',
        category: categories.bpla,
        date: '2023.05.13',
        author: 'Евгений Макаров',
        photo: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: '17',
        topic: 'Различные виды беспилотных летательных аппаратов и их особенности',
        description: 'Обзор разных типов БПЛА и сфер их применения',
        text: 'Существует несколько различных видов беспилотных летательных аппаратов, каждый из которых имеет свои особенности и предназначен для определенных задач. Например, квадрокоптеры и мультироторы обычно используются для более мелких задач, таких как фотографирование или поиск потерянных людей. На другом конце спектра находятся беспилотные летательные аппараты, разрабатываемые в ООО "Новые технологии", используемые для полётов на куда более большей высоте с целью наблюдением за большим участком земли. Кроме того, существуют такие типы БПЛА, как планеры и дирижабли, которые могут пролетать на больших расстояниях и выполнять задачи на более высоких высотах.',
        category: categories.bpla,
        date: '2023.06.05',
        author: 'Владимир Макаров',
        photo: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
    }
]

if (!localStorage.getItem('articles')) {
    localStorage.setItem('articles', JSON.stringify(articles))
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem('articles')))
        }, 2000)
    })

const update = (id, data) =>
    new Promise((resolve) => {
        const articles = JSON.parse(localStorage.getItem('articles'))
        const articleIndex = articles.findIndex((article) => article.id === id)
        articles[articleIndex] = {
            ...articles[articleIndex],
            ...data
        }
        localStorage.setItem('articles', JSON.stringify(articles))
        resolve(articles[articleIndex])
    })

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem('articles')).find(
                    (article) => article.id === id
                )
            )
        }, 2000)
    })

export default {
    fetchAll,
    update,
    getById
}
