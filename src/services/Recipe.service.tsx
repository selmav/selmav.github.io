import { Observable, of } from "rxjs";
import { Recipe } from "../models/Recipe.model";



export function GetPopular(): Observable<Recipe[]> {
    return of([
        {
            name: 'Sicilijanska pizza',
            time: '30m',
            likes: 122,
            imageUrl: 'https://gdsit.cdn-immedia.net/2014/10/Pizza.jpg'
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