import { useEffect, useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IngredientClasses } from "../models/Recipe.model";
import { GetIngredientClasses } from "../services/Recipe.service";

function IngredientAccordions({ selectClasses }: { selectClasses: Function }) {
    const { register, watch } = useForm({ defaultValues: { classes: [] } });
    const [classes, setClasses] = useState<IngredientClasses>();

    useEffect(() => {
        setClasses(GetIngredientClasses());
    }, []);

    useEffect(() => {
        const subscription = watch((value) => selectClasses(value.classes)); // todo: redux
        return () => subscription.unsubscribe();
    }, [watch]);

    const accordionBody = (name: string) =>
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', overflow: 'auto', height: '10rem' }}>
            {classes?.[name as keyof IngredientClasses]?.map((c, i) =>
                <Form.Check key={i} style={{ width: '18rem' }}
                    type="checkbox"
                    label={c.name}
                    value={c.id}
                    {...register('classes')}
                />)}
        </div>

    return (
        <div>
            <Accordion>
                <div className="accordion-custom">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4 className="secondary-font secondary-font--contrast">Osnovne namirnice</h4></Accordion.Header>
                        <Accordion.Body>{accordionBody('main')}</Accordion.Body>
                    </Accordion.Item>
                </div>

                <div className="accordion-custom">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h4 className="secondary-font secondary-font--contrast">Povrće</h4></Accordion.Header>
                        <Accordion.Body>{accordionBody('vegetables')}</Accordion.Body>
                    </Accordion.Item>
                </div>

                <div className="accordion-custom">
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h4 className="secondary-font secondary-font--contrast">Voće</h4></Accordion.Header>
                        <Accordion.Body>{accordionBody('fruit')}</Accordion.Body>
                    </Accordion.Item>
                </div>
            </Accordion>
        </div>
    );
}

export default IngredientAccordions;