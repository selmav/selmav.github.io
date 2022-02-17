import { Step as StepModel } from "../models/Recipe.model";

interface StepProps {
    index: number;
    step: StepModel;
}

function Step({ index, step }: StepProps) {
    return (
        <div className="d-flex flex-row align-items-baseline">
            <h5 className="secondary-font secondary-font--contrast" style={{ fontSize: '1.5rem', marginRight: '1rem' }}>{index + 1}</h5>
            <p className="d-inline-block secondary-font secondary-font--contrast">{step.name}</p>
        </div>);
}

export default Step;