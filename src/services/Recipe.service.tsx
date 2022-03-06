import { Observable, of } from "rxjs";
import { Category, IngredientClasses, Recipe } from "../models/Recipe.model";
import { AddToSearchResults, ingredientClassesMock, searchResults } from "../models/Search.mock";

export const myRecipes = [
    searchResults[4],
    searchResults[9],
    searchResults[10]
];

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
    results = !!name && name !== '' ? [...searchResults].filter(r => r.name.toLowerCase().includes(name.toLocaleLowerCase())) : [...searchResults];

    if (!!filters && filters.length) {
        results = results.filter(r => r.category && filters.includes(r.category));
    }

    return results;
}

export function GetRecipeById(id: string | undefined): Recipe | undefined {
    return searchResults.find(r => r.id === Number(id ?? 0));
}

export function GetIngredientClasses(): IngredientClasses {
    return {
        main: ingredientClassesMock.main?.sort((a, b) => a.name.localeCompare(b.name)),
        vegetables: ingredientClassesMock.vegetables?.sort((a, b) => a.name.localeCompare(b.name)),
        fruit: ingredientClassesMock.fruit?.sort((a, b) => a.name.localeCompare(b.name)),
    };
}

export function SearchByIngredients(ingredients: number[], filters: Category[]): Recipe[] {
    let results: Recipe[] = [];

    // todo: refactor this !!
    results = [...searchResults].filter(r => {
        const classes = [...(r.ingredientClasses?.main?.map(c => c.id) || []), ...(r.ingredientClasses?.vegetables?.map(c => c.id) || []), ...(r.ingredientClasses?.fruit?.map(c => c.id) || [])];
        return !!ingredients.filter(value => classes.includes(value)).length;
    });

    if (!!filters && filters.length) {
        results = results.filter(r => r.category && filters.includes(r.category));
    }

    return results;
}

export function GetMyRecipes(): Recipe[] {
    return [...myRecipes];
}

export function AddMyRecipe(recipe: Recipe) {
    // todo: redux ... 
    recipe = {...recipe, id: searchResults.length };
    myRecipes.push(recipe);
    AddToSearchResults(recipe);
}