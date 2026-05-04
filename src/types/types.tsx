export interface NewUser {
    "username": string,
    "email":string,
    "password": string
}

export interface User {
    "username": string,
    "email":string,
    "password": string
    "createdDate": string
    "role": String
}

export interface Credentials {
    "username": string,
    "password": string
}

export interface Category {
    "id": string,
    "userId": string,
    "categoryName": string
}