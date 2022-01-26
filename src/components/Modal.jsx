import { useEffect, useRef } from "react";

export default function Modal(props) {
    const [show, setShow] = [props.show, props.setShow];
    const contentTag = useRef(null);
    useEffect(() => {
        if (show) {
            document.body.classList.add("no-scroll");
            contentTag.current.scrollTop = 0;
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [show])
    return (
        <div className={show && props.data ? "" : "hidden"} >
            <div className="modal modal-close animate__animated  animate__fadeIn animate__faster" onClick={(e) => {
                if (e.target.className.includes('modal-close')) {
                    setShow(false);
                }
            }}
            >
                <div className="modal-content relative" ref={contentTag}>
                    <div className="modal-close absolute top-2 right-2 lg:top-4 lg:right-4">123</div>
                    <props.component data={props.data} />
                </div>
            </div>
        </div>

    );
}