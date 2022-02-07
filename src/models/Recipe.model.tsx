export interface Recipe {
    id?: number;
    name: string;
    time: string;
    likes: number;
    imageUrl: string;
    description?: string;
    personCount?: number;
    ingredients?: string[];
    steps?: Step[];
    serving?: string;
    advice?: string;
    comments?: UserComment[];
    category?: Category;
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
    Soup = 'a1',
    Appetizer = 'a2',
    Main = 'a3',
    Desert = 'a4',
    Other = 'a5'
}