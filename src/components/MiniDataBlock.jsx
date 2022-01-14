import { ReactComponent as Pattern } from "../assets/img/sky_lantern.svg"
export default function MiniDataBlock(props) {
    return (
        <div className="wrap mt-4 mb-4 lg:mt-12 lg:mb-12">
            <h1 className="main-color flex items-center mb-2 lg:mb-8 df-ft-fm">
                <span className="mr-1 lg:mr-2">:::</span>
                <Pattern className="lg:mr-2" />
                <span className="mr-1 lg:mr-2">{props.name}</span>
                <span className="mr-1 lg:mr-2">{props.eng.split('_').map(w => (w[0].toUpperCase()) + w.substr(1)).join(' ')}</span>
            </h1>
            {props.children}
        </div>
    )
}