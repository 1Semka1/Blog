export const categories = {
    biology: { id: '21qisme7kkano93mtr740301', name: 'Биология' },
    сhemistry: { id: '21qisme7kkano93mtr740302', name: 'Химия' },
    engineering: { id: '21qisme7kkano93mtr740303', name: 'Инженерия' },
    environmental: { id: '21qisme7kkano93mtr740304', name: 'Окружающая среда' },
    medicine: { id: '21qisme7kkano93mtr740305', name: 'Медицина' },
    physics: { id: '21qisme7kkano93mtr740306', name: 'Физика' },
    computerScience: { id: '21qisme7kkano93mtr740307', name: 'Информатика' },
    economy: { id: '21qisme7kkano93mtr740308', name: 'Экономика' },
    bpla: { id: '21qisme7kkano93mtr740309', name: 'БПЛА' }
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categories)
        }, 2000)
    })

export default {
    fetchAll
}
