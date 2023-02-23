

export class UsersValitations {

    public static loginValidade(login: String, password: string): boolean {
        return (login == undefined || login == null) && (password != undefined && password != null) && (typeof password === 'string' && password.trim().length > 0)
    }

    public static passwordValidate(password: string, login: string): boolean {
        return (password == undefined || password == null) && (login != undefined && login != null) && (typeof login === 'string' && login.trim().length > 0)
    }
}   