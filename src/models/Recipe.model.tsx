export interface Recipe {
    id?: number;
    name: string;
    time: string;
    likes: number;
    imageUrl: string;
    description?: string;
    personCount?: number;
    ingredients?: string[];
    ingredientClasses?: IngredientClasses;
    steps?: Step[];
    serving?: string;
    advice?: string;
    comments?: UserComment[];
    category?: Category;
    userId?: number;
}

export interface Step {
    id?: number;
    priority: number;
    name: string;
}

export interface UserComment {
    username: string;
    comment: string;
}

export enum Category {
    Soup = 'Supe',
    Appetizer = 'Predjela',
    Main = 'Glavna jela',
    Desert = 'Desert',
    Other = 'Ostalo'
}

export interface Ingredient {
    id?: number;
    name: string;
    category?: number; // 0 - main, 1 - vegetable, 2 - fruit
}

export interface RecipeIngredient {
    ingredientId: number;
    recipeId: number;
    quantity?: string;
}

export type IngredientClasses = {
    main?: Ingredient[];
    vegetables?: Ingredient[];
    fruit?: Ingredient[];
}


