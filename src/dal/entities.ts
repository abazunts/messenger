export interface IPhotos {
    small: string;
    large: string;
}

export interface IUsers {
    name: string;
    id: number;
    uniqueUrlName: string;
    photos: IPhotos;
    status: string;
    followed: boolean;
}

export interface IItems {
    items: IUsers[];
    totalCount: number;
    error: null;
}

export interface IDialogs {
    id: number,
    userName: string,
    hasNewMessages: boolean,
    lastDialogActivityDate: Date,
    lastUserActivityDate: Date
}