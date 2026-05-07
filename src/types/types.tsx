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
export interface RenameCategory {
    "categoryId": string,
    "categoryName": string
}
export interface TimerStatus {
    "status": string
}
export interface Timer {
    "id": string,
    "userId": string,
    "categoryId": string,
    "timeStart": Date,
    "timeStop": Date,
    "duration": number,
    "status": string,
    "creationDate": Date
}
export interface CategoryHistory {
    categoryId: string;
    categoryName: string;
    totalDuration: number;
}