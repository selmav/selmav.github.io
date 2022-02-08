import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Filter from '../components/Filter';
import './Search.scss';

function Search() {
    const recipes = [1];
    const [isSearched, setIsSearched] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const { register, formState: { errors, touchedFields } } = useForm<{ search: string }>({ mode: 'onBlur' });

    function onSearch() {
        setIsSearched(!isSearched);
    }

    const filters = [
        { value: 'soup', name: 'Supe' },
        { value: 'appetizer', name: 'Predjela' },
        { value: 'main', name: 'Glavna jela' },
        { value: 'desert', name: 'Kolači' },
        { value: 'other', name: 'Ostalo' }
    ];

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
                        <Filter getValues={(values: string[]) => setSelectedFilters(values)} filters={filters}/>
                        <button type="button" className="button-common" onClick={onSearch}>Pretraži</button>
                    </div>
                    {
                        touchedFields?.search && errors?.search && !selectedFilters.length &&
                        <p className="primary-font primary-font--error">
                            Molimo unesite pojam pretrage ili odaberite kategoriju jela.
                        </p>
                    }
                </div>

                {(recipes.length && isSearched) ?
                    <div className="no-results">
                        <h3 className="primary-font" style={{ fontSize: '1.8rem' }}>Nema rezultata pretrage.</h3>
                    </div> :
                    <div className="results-wrapper">
                        {/* card */}
                        cards work
                    </div>
                }
            </div>
        </div>
    );
};

export default Search;