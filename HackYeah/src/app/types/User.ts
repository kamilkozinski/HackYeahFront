import { Role } from "./Role";

export interface User {
    username: string,
    email?: string,
    role?: Role[],
    password?: string,
    gmnia?:string
    address?:string
}