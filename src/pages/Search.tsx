import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../components/Card';
import Filter from '../components/Filter';
import IngredientAccordions from '../components/IngredientAccordions';
import { Category, Recipe } from '../models/Recipe.model';
import { SearchByIngredients, SearchRecipes } from '../services/Recipe.service';
import { selectAllRecipes, selectSearchTerm, setSearch, useAppDispatch } from '../services/Store';
import './Search.scss';

// todo: redux - preserve search state

interface SearchProps {
    ingredientSearch?: boolean;
}

function Search({ ingredientSearch }: SearchProps) {
    const dispatch = useAppDispatch();
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isSearched, setIsSearched] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const { register, setValue } = useForm<{ search: string }>({ mode: 'onChange' });
    const filters = Object.keys(Category).map(key => ({ value: key, name: (Category as any)[key] }));
    const [values, setValues] = useState<{ name: string, value: string }[]>([]);

    const filtersAndButtonElement = <>
        <Filter getValues={(values: string[]) => setSelectedFilters(values)} filters={filters} isLeft={ingredientSearch} />
        <button type="button" className="button-common" onClick={() => ingredientSearch ? onIngredientSearch() : onSearch()}>Pretraži</button>
    </>

    // submit on enter
    function keyPress(e: any) {
        var x = e || window.event;
        var key = (x.keyCode || x.which);
        if (key == 13 || key == 3) {
            onSearch();
        }
    }

    useEffect(() => {
        document.onkeydown = keyPress;
    }, [selectedFilters.length])

    useEffect(() => {
        const searchTerm = selectSearchTerm();
        if (!!searchTerm) {
            setValue('search', searchTerm, { shouldTouch: true });
            onSearch();
        } else {
            fetchAll();
        }
    }, []);

    function onSearch() {
        setIsSearched(true);
        const value = (document.getElementById('searchInput') as HTMLInputElement).value;
        dispatch(setSearch({ search: value }));
        setRecipes(SearchRecipes(value, selectedFilters.map(f => (Category as any)[f])));
    }

    function fetchAll() {
        setIsSearched(true);
        setRecipes(selectAllRecipes());
    }

    function onIngredientSearch() {
        setIsSearched(true);
        setRecipes(SearchByIngredients(selectedIngredients.map(Number), selectedFilters.map(f => (Category as any)[f])));
    }

    function onChange() {
        const value = (document.getElementById('searchInput') as HTMLInputElement).value;
        setValues([...values, { name: 'search', value }]);
    }

    return (
        <div className="row h-100">
            <div className="col-md-10 offset-md-1 content-wrapper">
                <div className="search-row">
                    <h1 className="primary-font" style={{ fontSize: '2.5rem' }}>
                        {ingredientSearch ? 'Pronađi ideje po namirnicama koje imaš!' : 'Šta se danas jede...?'}
                    </h1>
                    <div className={ingredientSearch ? '' : 'row-space-between'}>
                        {ingredientSearch ?
                            <IngredientAccordions selectClasses={(values: string[]) => setSelectedIngredients(values)} />
                            :
                            <div style={{ position: 'relative', flexGrow: 1 }}>
                                <input id="searchInput" type="text" className='form-control' placeholder='Unesite pojam pretrage...'
                                    {...register('search', { required: true })} onChange={onChange} required />
                                <img className="i-search" src="/search.png" />
                            </div>
                        }

                        {ingredientSearch ?
                            <div className="ingredient-wrapper">{filtersAndButtonElement}</div>
                            : filtersAndButtonElement}
                    </div>
                </div>

                {(isSearched && !recipes.length) ?
                    <div className="no-results">
                        <h3 className="primary-font" style={{ fontSize: '1.8rem', paddingTop: '2rem', paddingBottom: '2rem' }}>Nema rezultata pretrage.</h3>
                    </div> :
                    <div className="results-wrapper">
                        {recipes.map((r, i) =>
                            <Card key={i} {...r} />
                        )}
                    </div>
                }
            </div>
        </div >
    );
};

export default Search;