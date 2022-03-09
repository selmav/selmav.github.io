import { Observable, of } from "rxjs";
import { Category, IngredientClasses, Recipe, UserComment } from "../models/Recipe.model";
import { AddToSearchResults, ingredientClassesMock, likedRecipes, searchResults } from "../models/Search.mock";

export const myRecipes = [
    searchResults[4],
    searchResults[9],
    searchResults[10]
];

export function GetPopular(): Observable<Recipe[]> {
    const popular = searchResults.sort((a , b) => a.likes > b.likes ? -1 : 1);
    return of(popular.slice(0, 3))
}

export function SearchRecipes(name: string, filters: Category[]): Recipe[] {
    let results: Recipe[] = [];
    results = !!name && name !== '' ? [...searchResults].filter(r => r.name.toLowerCase().includes(name.toLocaleLowerCase())) : [...searchResults];

    if (!!filters && filters.length) {
        results = results.filter(r => r.category && filters.includes(r.category));
    }

    return results;
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
    recipe = { ...recipe, id: searchResults.length };
    myRecipes.push(recipe);
    AddToSearchResults(recipe);
}

export function GetLikedRecipes() {
    return likedRecipes;
}
