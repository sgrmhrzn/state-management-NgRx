export interface BookModel {
    Name: string;
    Id: number;
    Price: number;
    Language: KeyValueModel;
    Genre: KeyValueModel;
}

export interface KeyValueModel {
    Key: string;
    DisplayTitle: string;
}