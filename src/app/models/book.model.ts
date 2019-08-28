export interface BookModel {
    Name: string;
    id: number;
    Price: number;
    Language: KeyValueModel;
    Genre: KeyValueModel;
}

export interface KeyValueModel {
    Key: string;
    DisplayTitle: string;
}