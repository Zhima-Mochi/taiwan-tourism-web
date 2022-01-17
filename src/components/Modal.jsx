export default function Modal(props) {
    const [show, setShow] = [props.show, props.setShow];
    return (
        <div className={show && props.data ? "" : "hidden"}>
            <div className="modal animate__animated  animate__fadeIn animate__faster" onClick={(e) => {
                if (e.target.className.includes('modal')) {
                    setShow(false);
                }
            }}>
                <div className="modal-content">
                    <props.component data={props.data} />
                </div>
            </div>
        </div>

    );
}