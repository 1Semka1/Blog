export const validatorConfig = {
    email: {
        isRequired: {
            message: 'Email обязателен для заполнения'
        },
        isEmail: {
            message: 'Email введён некорректно'
        }
    },
    name: {
        isRequired: {
            message: 'Имя обязательно для заполнения'
        },
        minLength: {
            message: 'Имя должно содержать минимум 2 символа',
            value: 2
        }
    },
    password: {
        isRequired: {
            message: 'Пароль обязателен для заполнения'
        },
        isCapitalSymbol: {
            message: 'Пароль должен содержать минимум одну заглавную букву'
        },
        isContainDigit: {
            message: 'Пароль должен содержать минимум одну цифру'
        },
        minLength: {
            message: 'Пароль должен содержать минимум 8 символов',
            value: 8
        }
    },
    category: {
        isRequired: { message: 'Категория статьи обязательна' }
    },
    licence: {
        isRequired: {
            message:
                'Вы не можете использовать сервис без подтверждения лицензионного соглашения'
        }
    },
    topic: {
        isRequired: {
            message: 'Тема статьи обязательна'
        },
        maxLength: {
            message: 'Заголовок не должен превышать 80 символов',
            value: 80
        }
    },
    description: {
        isRequired: {
            message: 'Описание статьи не может быть пустым'
        },
        maxLength: {
            message: 'Описание не должно превышать 200 символов',
            value: 200
        }
    },
    text: {
        isRequired: {
            message: 'Содержание статьи не может быть пустым'
        }
    },
    file: {
        isRequired: {
            message: 'Обязательно приложите файл работы'
        }
    },
    content: {
        isRequired: {
            message: 'Сообщение не может быть пустым'
        }
    }
}
