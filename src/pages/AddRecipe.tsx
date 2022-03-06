import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Category, Ingredient, Recipe, Step } from "../models/Recipe.model";
import "./AddRecipe.scss";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { AddMyRecipe } from "../services/Recipe.service";
import { Form } from "react-bootstrap";
import { toast, Slide } from "react-toastify";
import { useNavigate } from "react-router";


function AddRecipe() {
    const { register, formState: { errors, touchedFields }, watch, getValues, setValue } = useForm({ mode: 'onBlur' });
    const navigate = useNavigate();
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [steps, setSteps] = useState<Step[]>([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const [images, setImages] = useState<ImageListType>([]);
    const watchFields = watch(['name', 'hours', 'minutes', 'serving', 'category']);
    const categoryList = Object.keys(Category).map(key => ({ value: key, name: (Category as any)[key] }));

    const errorMessage = 'Polje je obavezno.';

    useEffect(() => {
        setDisabled();
    }, [steps.length, ingredients.length, watchFields]);

    useEffect(() => {
        Object.keys(errors).map(key => setValue(key, '', { shouldValidate: true }));
    }, [errors?.hours, errors?.minutes, errors?.serving]);

    function setDisabled() {
        const hasErrors = Object.keys(errors).length > 0;
        const missingInfo = ingredients.length === 0 || steps.length === 0 ||
            (getValues('hours') === '' && getValues('minutes') === '') ||
            getValues('name') === '' || getValues('category') === '';
        setIsDisabled(!!(hasErrors || missingInfo));
    }

    function addIngredient() {
        const ingredient = getValues('ingredient');
        if (ingredient && ingredient !== '') {
            setIngredients([...ingredients, { name: ingredient }]);
            setValue('ingredient', '');
        }
    }

    function removeIngredient(index: number) {
        const newArr = [...ingredients];
        newArr.splice(index, 1);
        setIngredients(newArr);
    }

    function addStep() {
        const step = getValues('step');
        if (step && step !== '') {
            const newArr = [...steps, { name: step }];
            setSteps(newArr.map((step, i) => ({ ...step, priority: i + 1 })));
            setValue('step', '');
        }
    }

    function removeStep(index: number) {
        let newArr = [...steps];
        newArr.splice(index, 1);
        newArr = newArr.map((step, i) => ({ ...step, priority: i + 1 }));
        setSteps(newArr);
    }

    function onImageUpload(imageList: ImageListType) {
        setImages(imageList);
    }

    function saveRecipe() {
        const recipe: Recipe = {
            name: getValues('name'),
            time: getTime(),
            imageUrl: images[0]?.dataURL !== undefined ? images[0].dataURL : '',
            likes: 0,
            description: getValues('description'),
            personCount: getValues('serving'),
            ingredients: ingredients.map(x => x.name),
            steps,
            serving: getValues('servingDesc'),
            advice: getValues('advice'),
            category: getValues('category') as Category
        }

        AddMyRecipe(recipe);
        toast.success('Recept je sačuvan!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide
        });
        navigate('/main/recipe/my');
    }

    function getTime(): string {
        const hours = getValues('hours');
        const minutes = getValues('minutes');

        let time = hours !== '' ? `${hours}h` : '';
        time = minutes !== '' ? `${time} ${minutes}m` : time;
        return time;
    }

    return (
        <div className="row h-100">
            <div className="col-md-10 offset-md-1 content-wrapper">
                <div>
                    <h3 className="secondary-font" >Naziv recepta</h3>
                    <input type="text" className="form-control" {...register('name', { required: true })} />
                    {
                        touchedFields?.name && errors?.name &&
                        <p className="primary-font primary-font--error">{errorMessage}</p>
                    }
                </div>

                <div className="mt-5">
                    <h3 className="secondary-font" >Kratak opis</h3>
                    <input type="text" className="form-control" {...register('description')} />
                </div>

                <div className="mt-5">
                    <h3 className="secondary-font">Sastojci</h3>
                    {
                        !!ingredients.length && ingredients.map((val, i) =>
                            <div className="listing listing--start" key={i}>
                                <div className="list-btn secondary-font secondary-font--contrast"
                                    onClick={() => removeIngredient(i)}>-</div>
                                <h5 className="secondary-font">{val.name}</h5>
                            </div>
                        )
                    }
                    <div className="listing">
                        <div className="list-btn secondary-font secondary-font--contrast" onClick={addIngredient}>+</div>
                        <input className="form-control" type="text" {...register('ingredient')} />
                    </div>
                    {
                        touchedFields?.ingredient && !getValues('ingredient') && !ingredients.length &&
                        <p className="primary-font primary-font--error">{errorMessage}</p>
                    }
                </div>

                <div className="mt-5">
                    <h3 className="secondary-font">Postupak</h3>
                    {
                        !!steps.length && steps.map((val, i) =>
                            <div className="listing listing--start" key={i}>
                                <div className="list-btn secondary-font secondary-font--contrast"
                                    onClick={() => removeStep(i)}>-</div>
                                <h5 className="secondary-font">{val.name}</h5>
                            </div>
                        )
                    }
                    <div className="listing">
                        <div className="list-btn secondary-font secondary-font--contrast" onClick={addStep}>+</div>
                        <textarea className="form-control" rows={3} {...register('step')} />
                    </div>
                    {
                        touchedFields?.step && !getValues('step') && !steps.length &&
                        <p className="primary-font primary-font--error">{errorMessage}</p>
                    }
                </div>

                <div className="mt-5">
                    <h3 className="secondary-font" >Posluživanje</h3>
                    <input type="text" className="form-control" {...register('servingDesc')} />
                </div>

                <div className="mt-5">
                    <h3 className="secondary-font" >Savjet</h3>
                    <input type="text" className="form-control" {...register('advice')} />
                </div>

                <div className="flex-row mt-5">
                    <div>
                        <h3 className="secondary-font">Vrijeme pripreme</h3>
                        {
                            (touchedFields?.hours || touchedFields?.minutes) &&
                            !getValues('hours') && !getValues('minutes') &&
                            <p className="primary-font primary-font--error">{errorMessage}</p>
                        }

                    </div>
                    <div className="time-wrapper flex-col">
                        <h5 className="secondary-font">sati:</h5>
                        <input className="form-control" type="number" min={0} {...register('hours', { min: '0', max: 23 })} />

                        <h5 className="secondary-font">minute:</h5>
                        <input className="form-control" type="number" min={0} {...register('minutes', { min: '0', max: 59 })} />
                    </div>
                </div>

                <div className="flex-row mt-5">
                    <div>
                        <h3 className="secondary-font">Broj osoba</h3>
                        {
                            touchedFields?.serving && !getValues('serving') &&
                            <p className="primary-font primary-font--error">{errorMessage}</p>
                        }
                    </div>
                    <input className="form-control flex-col" type="number" min={1} {...register('serving', { min: 1 })} />
                </div>

                <div className="flex-row mt-5">
                    <div>
                        <h3 className="secondary-font">Kategorija</h3>
                        {
                            touchedFields?.category && !getValues('category') &&
                            <p className="primary-font primary-font--error">{errorMessage}</p>
                        }
                    </div>
                    <Form.Select className="form-control flex-col" {...register('category', { required: true })}>
                        {!getValues('category') && <option value="">Odaberite kategoriju jela...</option>}
                        {categoryList.map((c) =>
                            <option value={c.name} key={c.value}>{c.name}</option>
                        )}
                    </Form.Select>
                </div>

                <div className="mt-5">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <div style={{ display: 'flex' }}>
                            <ImageUploading
                                value={images}
                                onChange={onImageUpload}
                            >
                                {({ onImageUpload }) => {
                                    return <p onClick={onImageUpload} className="list-btn secondary-font secondary-font--contrast">
                                        +
                                    </p>
                                }}
                            </ImageUploading>
                            <h3 className="secondary-font">{images.length ? images[0].file?.name : 'Odaberi sliku'}</h3>
                        </div>
                        {!!images.length && <p className="secondary-font link" onClick={() => onImageUpload([])}>Ukloni sliku</p>}
                    </div>
                    {
                        !!images.length &&
                        <img className="upload-image" src={images[0].dataURL} />
                    }
                </div>

                <div className="buttons-row mt-5 mb-5">
                    <button className="button-common button-common--remove">Obriši</button>
                    <button className={`button-common ${isDisabled ? 'button-common--disabled' : ''}`}
                        disabled={isDisabled} onClick={saveRecipe}>Sačuvaj</button>
                </div>

            </div>
        </div >);
}

export default AddRecipe;