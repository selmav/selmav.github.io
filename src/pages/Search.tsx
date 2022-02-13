import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import Filter from '../components/Filter';
import { Category, Recipe } from '../models/Recipe.model';
import { SearchRecipes } from '../services/Recipe.service';
import './Search.scss';

// todo: redux - preserve search state

function Search() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isSearched, setIsSearched] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [isSearchValid, setIsSearchValid] = useState(true);
    const { register, formState: { errors, touchedFields }, getValues, setValue } = useForm<{ search: string }>({ mode: 'onBlur' });
    const { state } = useLocation();
    const filters = Object.keys(Category).map(key => ({ value: key, name: (Category as any)[key] }))

    useEffect(() => {
        if (state) {
            setValue('search', state as string, { shouldTouch: true });
            onSearch();
        }
    }, []);

    useEffect(() => {
        setIsSearchValid(!!touchedFields.search && (!errors.search || selectedFilters.length > 0));
    }, [touchedFields, errors.search, selectedFilters]);

    function onSearch() {
        setIsSearched(true);
        setRecipes(SearchRecipes(getValues('search'), selectedFilters.map(f => (Category as any)[f])));
    }

    return (
        <div className="row h-100">
            <div className="col-md-10 offset-md-1 content-wrapper">
                <div className="search-row">
                    <h1 className="primary-font" style={{ fontSize: '2.5rem' }}>Šta se danas jede...?</h1>
                    <div className="search-wrapper">
                        <div style={{ position: 'relative', flexGrow: 1 }}>
                            <input type="text" className='form-control' placeholder='Unesite pojam pretrage...'
                                {...register('search', { required: true })} />
                            <img className="i-search" src="/search.png" />
                        </div>
                        <Filter getValues={(values: string[]) => setSelectedFilters(values)} filters={filters} />
                        <button type="button" className={`button-common ${isSearchValid ? '' : 'button-common--disabled'}`}
                            disabled={!isSearchValid} onClick={onSearch}>Pretraži</button>
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
                        <h3 className="primary-font" style={{ fontSize: '1.8rem' }}>Nema rezultata pretrage.</h3>
                    </div> :
                    <div className="results-wrapper">
                        {recipes.map((r, i) =>
                            <Card key={i} {...r} />
                        )}
                    </div>
                }
            </div>
        </div>
    );
};

export default Search;