export interface BookModel {
    Name: string;
    Id: string;
    Price: number;
    Language: KeyValueModel;
    Genre: KeyValueModel;
}

export interface KeyValueModel {
    Key: string;
    DisplayTitle: string;
}