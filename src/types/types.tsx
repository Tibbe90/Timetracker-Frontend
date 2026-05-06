export interface NewUser {
    "username": string,
    "email":string,
    "password": string
}

export interface User {
    "id": string,
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
export interface NewCategory {
    "userId": string,
    "categoryName": string
}
export interface TimerStatus {
    "status": string
}
export interface Timer {
    "Id": string,
    "userId": string,
    "categoryId": string,
    "timeStart": string,
    "timeStop": string,
    "duration": string,
    "status": string,
    "creationDate": string
}