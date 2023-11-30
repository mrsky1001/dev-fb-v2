/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

import Toast from '../../modules/app/toast/toast'

const messages = {
    DOWNLOADED: new Toast('Данные успешно получены!', 'success'),
    SAVED: new Toast('Данные успешно сохранены!', 'success'),
    LOGIN_SUCCESS: new Toast('Пользователь успешно авторизован!', 'success'),
    REGISTRATION_SUCCESS: new Toast('Пользователь успешно зарегистрирован!', 'success'),
    LOGOUT_SUCCESS: new Toast('Пользователь успешно деавторизован!', 'success'),
    REQUIRED_FIELD: new Toast('Обязательное поле!'),
    INCORRECT_PASSWORD_SYMBOLS: new Toast('Пароль должен содержать цифры и латинские буквы!'),
    INCORRECT_PASSWORD_MIN_LENGTH: new Toast('Пароль не может быть менее 3 символов!'),
    INCORRECT_PASSWORD_MAX_LENGTH: new Toast('Пароль не может быть более 20 символов!'),
    INCORRECT_USERNAME_SYMBOLS: new Toast('Имя может содержать цифры и латинские буквы!'),
    INCORRECT_USERNAME_MIN_LENGTH: new Toast('Имя не может быть менее 8 символов!'),
    INCORRECT_USERNAME_MAX_LENGTH: new Toast('Имя не может быть более 20 символов!'),
    INCORRECT_EMAIL: new Toast('Не корректный e-mail!'),

    LOGIN_ERROR: new Toast('Ошибка! Пользователь не авторизован!', 'error'),
    REGISTRATION_ERROR: new Toast('Ошибка! Пользователь не зарегистрирован!', 'error'),
    NOT_SAVED: new Toast('Внимание! Данные не сохранены!', 'error'),
    DELETED: new Toast('Данные успешно удалены!', 'success'),
    NOT_DELETED: new Toast('Внимание! Данные не удалось удалить!', 'error'),
    LEAVING_PAGE: new Toast('Вы хотите уйти? У вас есть несохранённые изменения!', 'info'),
    NOT_VALID: new Toast('Внимание! Не все поля заполнены!', 'info'),
    NOT_SELECTED_TEXT: new Toast('Текст для изменения не выделен!', 'info')
}

export default messages
