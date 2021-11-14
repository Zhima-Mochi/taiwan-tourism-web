import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap"

export function InfoModal(props) {
    const { item, showId, resetIsShow } = props;
    useEffect(() => {
        const modal = document.getElementById(item.ID);
        const handleModal = function (event) {
            if (event.target == modal) {
                resetIsShow();
            }
        }
        window.addEventListener("click", handleModal);
        return () => window.removeEventListener("click", handleModal);
    }, [])
    useEffect(
        () => {
            const modal = document.getElementById(item.ID);
            if (showId == modal.id) {
                modal.style.display = "block";
            } else {
                modal.style.display = "none";
            }
        }, [showId]
    )

    return (
        <>
            <Modal.Dialog id={item.ID} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{item.Name}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </>
    )
}