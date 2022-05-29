import { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FilterValue } from "../models/FilterValue.model";
import './Filter.scss';

interface FilterProps {
    getValues: Function;
    filters: FilterValue[];
    isLeft?: boolean;
}

function Filter(props: FilterProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { register, getValues } = useForm({ mode: 'onChange' });
    const ref = useRef<any>(null);

    function handleClick(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target) && isExpanded) {
            onExpand();
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref, isExpanded]);

    function onExpand() {
        isExpanded && props.getValues(getValues('filter')); // todo: redux
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="filter-wrapper" ref={ref}>
            <img src="/filter.png" onClick={onExpand} />

            {
                isExpanded &&
                <div className={`expanded ${props.isLeft ? 'expanded--left' : ''}`}>
                    <h5 className="primary-font primary-font--contrast">Kategorije:</h5>

                    {props.filters.map((c, i) =>
                        <div key={i}>
                            <Form.Check
                                type="checkbox"
                                label={c.name}
                                value={c.value}
                                {...register('filter')}
                            />
                        </div>)}
                </div>
            }
        </div>
    );
}

export default Filter;