import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Recipe, UserComment } from '../models/Recipe.model'
import { searchResults } from '../models/Search.mock'
import { User } from '../models/User.model'

// USER STORE SLICE
interface UserState {
    currentUserId?: number
    likedRecipes: { [key: number]: number[] },
    allUsers: User[]
}

export const initialUserState: UserState = {
    currentUserId: undefined,
    likedRecipes: {},
    allUsers: [{ userId: 1, username: 'vselma', password: 'selma' }, { userId: 2, username: 'vs', password: 'selma' }]
}


export const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        likeRecipe: (state: UserState, { payload: { userId, recipeId } }: PayloadAction<{ userId: number, recipeId: number, like: number }>) => {
            const hasRecipe = state.likedRecipes[userId]?.includes(recipeId);
            const userLiked = hasRecipe ? state.likedRecipes[userId].filter(r => r !== recipeId) :
                [...(state.likedRecipes[userId] ?? []), recipeId]
            return {
                ...state,
                likedRecipes: {
                    ...state.likedRecipes,
                    [userId]: userLiked
                }
            }
        },
        login: (state: UserState, { payload }: PayloadAction<number>) => ({ ...state, currentUserId: payload }),
        logout: (state: UserState) => ({ ...state, currentUserId: undefined })
    }
})

export const { likeRecipe, login, logout } = userSlice.actions

// RECIPE STORE SLICE

interface RecipeState {
    allRecipes: Recipe[]
}
const initialState: RecipeState = {
    allRecipes: searchResults
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addRecipe: (state: RecipeState, action: PayloadAction<Recipe>) => ({ ...state, allRecipes: [...state.allRecipes, action.payload] }),
        addComment: (state: RecipeState, { payload: { recipeId, comment } }: PayloadAction<{ recipeId: number, comment: UserComment }>) => {
            const index = state.allRecipes?.findIndex(r => r.id === recipeId);
            if (index < 0) return { ...state };
            return {
                ...state,
                allRecipes: state.allRecipes.map(r => r.id === recipeId ? { ...r, comments: [...(r.comments || []), comment] } : r)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(likeRecipe, (state, { payload: { recipeId, like } }) => ({
            ...state,
            allRecipes: state.allRecipes.map(r => r.id === recipeId ? { ...r, likes: r.likes + like } : r)
        }))
    }
})

export const { addRecipe, addComment } = recipeSlice.actions

// APP STORE

export const store = configureStore({
    reducer: {
        recipes: recipeSlice.reducer,
        user: userSlice.reducer
    },
})

export const getState = store.getState;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// USER SELECTORS
export const selectCurrentUserId = () => getState()?.user.currentUserId ?? 0;
export const selectLikedRecipesIds = (userId: number) => [...(getState()?.user.likedRecipes[userId] ?? [])]
export const selectIsLiked = (userId: number, recipeId: number) => {
    const recipes = [...(getState().user.likedRecipes[userId] ?? [])];
    return recipes.findIndex(r => r === recipeId) > -1;
}
export const selectAllUsers = () => [...(getState()?.user.allUsers ?? [])];
export const selectIsLoggedIn = (state: UserState) => {
    const userId = state.currentUserId;
    return !!userId && userId > 0;
};

// RECIPE SELECTORS
export const selectAllRecipes = () => [...getState()?.recipes?.allRecipes];
export const selectAllRecipesLength = () => selectAllRecipes().length;
export const selectMyRecipes = () => {
    const userId = selectCurrentUserId();
    const allRecipes = selectAllRecipes();
    return [...allRecipes.filter(r => r.userId === userId)];
}
export const selectRecipeById = (recipeId: number): Recipe => {
    const recipe = selectAllRecipes().find(r => r.id === recipeId);
    if (!recipe) return {} as Recipe;

    return {
        ...recipe,
        steps: [...(recipe.steps || [])]
    }
}
export const selectRecipesByIds = (recipeIds: number[]) => {
    const allRecipes = selectAllRecipes();
    return allRecipes.filter(r => recipeIds.includes(r.id ?? 0));
}
