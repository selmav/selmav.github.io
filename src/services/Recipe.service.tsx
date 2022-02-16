import { Observable, of } from "rxjs";
import { Category, Recipe } from "../models/Recipe.model";
import { searchResults } from "../models/Search.mock";


export function GetPopular(): Observable<Recipe[]> {
    return of([
        {
            name: 'Sicilijanska pizza',
            time: '30m',
            likes: 122,
            imageUrl: 'https://gdsit.cdn-immedia.net/2014/10/Pizza.jpg',
            description: 'this is desc'
        },
        {
            time: '30m',
            name: 'Ćevapi',
            likes: 120,
            imageUrl: 'https://bascarsija.ba/media/k2/items/cache/1da7a0ac7a34d319d36fde2ba2a083ea_XL.jpg'
        },
        {
            time: '30m',
            name: 'Supa od šparoga i brokule',
            likes: 78,
            imageUrl: 'https://static.fanpage.it/wp-content/uploads/sites/22/2020/11/Cream-of-Asparagus-Soup-9-1200x1200.jpg'
        }
    ])
}

export function SearchRecipes(name: string, filters: Category[]): Recipe[] {
    let results: Recipe[] = [];
    if (!!name && name !== '') {
        results = [...searchResults].filter(r => r.name.toLowerCase().includes(name.toLocaleLowerCase()));
    }

    if (!!filters && filters.length) {
        results = (results.length ? results : [...searchResults]).filter(r => r.category && filters.includes(r.category));
    }

    return results;
}

export function GetRecipeById(id: string | undefined): Recipe | undefined {
    return searchResults.find(r => r.id === Number(id ?? 0));
}