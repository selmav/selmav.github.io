import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Ingredient, Step } from "../models/Recipe.model";
import "./AddRecipe.scss";


function AddRecipe() {
    const { register, formState: { errors, touchedFields }, watch, getValues, setValue } = useForm({ mode: 'onBlur' });
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [steps, setSteps] = useState<Step[]>([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const watchFields = watch(['name', 'hours', 'minutes', 'serving']);

    const errorMessage = 'Polje je obavezno.';

    useEffect(() => {
        setDisabled();
    }, [steps.length, ingredients.length, watchFields]);

    useEffect(() => {
        Object.keys(errors).map(key => setValue(key, '', { shouldValidate: true }));
    }, [errors?.hours, errors?.minutes, errors?.serving]);

    function setDisabled() {
        const hours = getValues('hours');
        const minutes = getValues('minutes');
        const name = getValues('name');

        const hasErrors = Object.keys(errors).length > 0;
        const missingInfo = ingredients.length === 0 || steps.length === 0 || (hours === '' && minutes === '') || name === '';
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
                        <input className="form-control" type="number" min={0} {...register('hours', { min: '0' })} />

                        <h5 className="secondary-font">minute:</h5>
                        <input className="form-control" type="number" min={0} {...register('minutes', { min: '0' })} />
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


                <div className="flex-row mt-5 mb-5">
                    <div style={{ display: 'flex' }}>
                        <label className="list-btn secondary-font secondary-font--contrast">
                            + <input type="file" style={{ display: 'none' }} />
                        </label>
                        <h3 className="secondary-font">Odaberi sliku </h3>
                    </div>

                    <div className="flex-col">
                        <button className="button-common button-common--remove">Obriši</button>
                        <button className={`button-common ${isDisabled ? 'button-common--disabled' : ''}`}
                            disabled={isDisabled}>Sačuvaj</button>
                    </div>
                </div>

            </div>
        </div >);
}

export default AddRecipe;