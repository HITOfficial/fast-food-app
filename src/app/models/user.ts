import { IRoles } from "./roles";

export interface IUser {
    uid: string
    roles: IRoles,
    email: string,
    banned: boolean,
    boughtProducts: string[]
}