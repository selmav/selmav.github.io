import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import PopularCard from '../components/PopularCard';
import { Recipe } from '../models/Recipe.model';
import { GetPopular } from '../services/Recipe.service';
import './Landing.scss'

function Landing() {
    const [popular, setPopular] = useState<Recipe[]>([]);
    const { register, getValues } = useForm({ mode: 'onBlur' });
    const navigate = useNavigate();

    // todo: redux?
    useEffect(() => {
        return GetPopular().subscribe(r => {
            setPopular(r);
        }).unsubscribe();
    }, []);

    function onSearch() {
        // todo: redux?
        navigate('/main/search', { state: getValues('search') });
    }

    return (
        <div className="container-fluid bg-color">
            {/* landing main */}
            <section className="row bg-image">
                <div className="col-sm-12" style={{ height: '100%' }}>
                    <div className="row login-wrapper">
                        <div className="col-md-3 offset-md-1">
                            <Header />
                        </div>
                    </div>

                    <div className="row" style={{ height: '100vh' }}>
                        <div className="col-sm-12 col-md-5 offset-md-1 primary-font main-wrapper">
                            <div className="primary-search mt-auto">
                                <h1>Šta se danas jede?</h1>
                                <div style={{ position: 'relative' }}>
                                    <input className='form-control' placeholder='Unesite pojam pretrage...'
                                        {...register('search')}></input>
                                    <img className="i-search" onClick={onSearch} src="search.png" />
                                </div>
                            </div>

                            <div className="secondary-search mt-auto">
                                <div>
                                    <h3>Nemaš ideju?</h3> <br />
                                    <h3>Odaberi namirnice i pronađi savršen obrok!</h3>
                                </div>
                                <button type="button" className="button-common" onClick={() => navigate('/main/ingredients')}>{'>'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* popular */}
            <section className="row bg-color">
                <div className="col-md-10 offset-md-1">
                    <div className="popular-wrapper">
                        <h1 className="primary-font">Popularni recepti</h1>
                        <div className="cards-wrapper">
                            {popular?.map((r: Recipe, i: number) => <PopularCard key={i} {...r} />)}
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Landing;
