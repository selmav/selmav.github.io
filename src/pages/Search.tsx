import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../components/Card';
import Filter from '../components/Filter';
import IngredientAccordions from '../components/IngredientAccordions';
import { Category, Recipe } from '../models/Recipe.model';
import { SearchByIngredients, SearchRecipes } from '../services/Recipe.service';
import { selectSearchTerm, setSearch, useAppDispatch } from '../services/Store';
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
    const [isSearchValid, setIsSearchValid] = useState(true);
    const { register, getValues, setValue } = useForm<{ search: string }>({ mode: 'onChange' });
    const filters = Object.keys(Category).map(key => ({ value: key, name: (Category as any)[key] }));
    const [values, setValues] = useState<{ name: string, value: string }[]>([]);
    const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>({});
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

    const filtersAndButtonElement = <>
        <Filter getValues={(values: string[]) => setSelectedFilters(values)} filters={filters} isLeft={ingredientSearch} />
        {
            ingredientSearch ?
                <button type="button" className={`button-common ${selectedFilters.length || selectedIngredients.length ? '' : 'button-common--disabled'}`}
                    disabled={!selectedFilters.length && !selectedIngredients.length} onClick={onIngredientSearch}>Pretraži</button>
                : <button type="button" className={`button-common ${isSearchValid ? '' : 'button-common--disabled'}`}
                    disabled={!isSearchValid} onClick={onSearch}>Pretraži</button>
        }
    </>

    // submit on enter
    function keyPress(e: any) {
        var x = e || window.event;
        var key = (x.keyCode || x.which);
        if (isSearchValid && (key == 13 || key == 3)) {
            onSearch();
        }
    }

    useEffect(() => {
        document.onkeydown = keyPress;
    }, [isSearchValid, selectedFilters])

    useEffect(() => {
        const searchTerm = selectSearchTerm();
        if (!!searchTerm) {
            setValue('search', searchTerm, { shouldTouch: true });
            onSearch();
        }
    }, []);

    useEffect(() => {
        setIsSearchValid((!!touchedFields.search && !errors.search) || selectedFilters.length > 0);
    }, [touchedFields, errors.search, selectedFilters]);

    useEffect(() => {
        const tf = values?.reduce((a, b) => ({ ...a, [b.name]: true }), {})
        setTouchedFields(tf);
    }, [values.length])

    function onSearch() {
        setIsSearched(true);
        const value = getValues('search');
        dispatch(setSearch({ search: value }));
        setRecipes(SearchRecipes(value, selectedFilters.map(f => (Category as any)[f])));
    }

    function onIngredientSearch() {
        setIsSearched(true);
        setRecipes(SearchByIngredients(selectedIngredients.map(Number), selectedFilters.map(f => (Category as any)[f])));
    }

    function onChange() {
        const value = getValues('search');
        setValues([...values, { name: 'search', value }]);
        const valid = (document.getElementById('searchInput') as HTMLInputElement).checkValidity();
        console.log({ valid });
        setErrors({ search: !valid });
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
                    {
                        touchedFields?.search && !isSearchValid &&
                        <p className="primary-font primary-font--error">
                            Molimo unesite pojam pretrage ili odaberite kategoriju jela.
                        </p>
                    }
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