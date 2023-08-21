/*
 * Copyright (c) Kolyada N.V. <mrsky1001.work@gmail.com> 2023
 */

/**
 *  Файл стартовой инициализации при первоначальной загрузке страницы
 */
import storeLoader from '../subscriber/storeLoader'

export const initApp = () => {
    storeLoader.loadDomains()
}
