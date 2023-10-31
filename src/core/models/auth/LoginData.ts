export interface ILoginData {
    password: string
    email: string
}

/**
 * Модель для данных при регистрации
 */
export class LoginData implements ILoginData {
    email: string
    password: string

    constructor(obj?: ILoginData) {
        if (obj) {
            this.email = obj.email
            this.password = obj.password
        } else {
            this.email = ''
            this.password = ''
        }
    }

    isValid() {
        return this.password != null && this.email != null
    }
}
