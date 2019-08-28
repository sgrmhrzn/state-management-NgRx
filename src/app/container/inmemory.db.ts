import { InMemoryDbService } from 'angular-in-memory-web-api';
import { KeyValueModel } from '../models/book.model';

export class IBooksMemory implements InMemoryDbService {
    createDb() {
        const books = [
            {
                id: 1, Name: 'Notebook', Price: 500,
                Language: { DisplayTitle: 'English', Key: 'eng' },
                Genre: { DisplayTitle: 'Romantic', Key: 'rom' }
            },
            {
                id: 2, Name: 'Nepali', Price: 400,
                Language: { DisplayTitle: 'Nepali', Key: 'nep' },
                Genre: { DisplayTitle: 'Academic', Key: 'aca' }
            },
            {
                id: 3, Name: 'English', Price: 700,
                Language: { DisplayTitle: 'English', Key: 'eng' },
                Genre: { DisplayTitle: 'Academic', Key: 'Academic' }
            },
            {
                id: 4, Name: 'Science', Price: 220,
                Language: { DisplayTitle: 'English', Key: 'eng' },
                Genre: { DisplayTitle: 'Academic', Key: 'aca' }
            }
        ];

        const languageData: Array<KeyValueModel> = [
            {
                Key: 'eng',
                DisplayTitle: 'English'
            },
            {
                Key: 'nep',
                DisplayTitle: 'Nepali'
            },
            {
                Key: 'hin',
                DisplayTitle: 'Hindi'
            },
            {
                Key: 'spn',
                DisplayTitle: 'Spanish'
            }
        ];

        const genreData: Array<KeyValueModel> = [
            {
                Key: 'aca',
                DisplayTitle: 'Academic'
            },
            {
                Key: 'fic',
                DisplayTitle: 'Fiction'
            },
            {
                Key: 'rom',
                DisplayTitle: 'Romantic'
            },
            {
                Key: 'hr',
                DisplayTitle: 'Horror'
            }
        ];

        return { stock: books, languages: languageData, genres: genreData };
    }
}