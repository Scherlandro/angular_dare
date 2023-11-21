export interface IUser {
    id:number,
    name: string,
    username: string,
    password: string
}

export interface ISingleUser{
    data: IUser
}

export interface IDataUser{
    data: IUser[]
}

export interface ITokenUser{
    id: number,
    name: string,
    username: string,
    iap?: number,
    exp?: number
}
