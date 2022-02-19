import { useEffect, useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IngredientClasses } from "../models/Recipe.model";
import { GetIngredientClasses } from "../services/Recipe.service";

function IngredientAccordions() {
    const { register, getValues } = useForm();
    const [classes, setClasses] = useState<IngredientClasses>();

    useEffect(() => {
        setClasses(GetIngredientClasses());
    }, []);

    return (
        <div>
            <Accordion>
                <div className="accordion-custom">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4 className="secondary-font secondary-font--contrast">Osnovne namirnice</h4></Accordion.Header>
                        <Accordion.Body>
                            {classes?.main?.map((c, i) =>
                                <div key={i}>
                                    <Form.Check
                                        type="checkbox"
                                        label={c.name}
                                        value={c.id}
                                        {...register('classes')}
                                    />
                                </div>)}
                        </Accordion.Body>
                    </Accordion.Item>
                </div>

                <div className="accordion-custom">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h4 className="secondary-font secondary-font--contrast">Povrće</h4></Accordion.Header>
                        <Accordion.Body>
                            {classes?.vegetables?.map((c, i) =>
                                <div key={i}>
                                    <Form.Check
                                        type="checkbox"
                                        label={c.name}
                                        value={c.id}
                                        {...register('classes')}
                                    />
                                </div>)}
                        </Accordion.Body>
                    </Accordion.Item>
                </div>

                <div className="accordion-custom">
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h4 className="secondary-font secondary-font--contrast">Voće</h4></Accordion.Header>
                        <Accordion.Body>
                            {classes?.fruit?.map((c, i) =>
                                <div key={i}>
                                    <Form.Check
                                        type="checkbox"
                                        label={c.name}
                                        value={c.id}
                                        {...register('classes')}
                                    />
                                </div>)}
                        </Accordion.Body>
                    </Accordion.Item>
                </div>
            </Accordion>
        </div>
    );
}

export default IngredientAccordions;