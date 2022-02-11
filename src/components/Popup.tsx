import { ReactElement } from "react";
import { Modal, ModalProps } from "react-bootstrap";

interface PopupProps {
    body?: ReactElement;
}

function Popup(props: ModalProps & PopupProps) {
    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Prijava</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    props.body ?? <p>some body</p>
                }
            </Modal.Body>

            <Modal.Footer>
                <button onClick={props.onHide}>Prijava</button>
            </Modal.Footer>
        </Modal>
    );
}

export default Popup;