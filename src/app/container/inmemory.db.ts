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
                id: 3, Name: 'Beautiful Disaster', Price: 500,
                Language: { DisplayTitle: 'English', Key: 'eng' },
                Genre: { DisplayTitle: 'Romantic', Key: 'rom' }
            },
            {
                id: 4, Name: 'American Psycho', Price: 500,
                Language: { DisplayTitle: 'English', Key: 'eng' },
                Genre: { DisplayTitle: 'Horror', Key: 'hr' }
            },
            {
                id: 5, Name: 'The Hunger Games', Price: 1000,
                Language: { DisplayTitle: 'English', Key: 'eng' },
                Genre: { DisplayTitle: 'Fiction', Key: 'fic' }
            },
            {
                id: 6, Name: 'Basic Spanish', Price: 1000,
                Language: { DisplayTitle: 'Spanish', Key: 'spn' },
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