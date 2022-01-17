import df_img from "../assets/img/default-image.png"
import { ReactComponent as Schedule } from '../assets/img/schedule_black_24dp.svg';
import { ReactComponent as Phone } from '../assets/img/phone_black_24dp.svg';
import { ReactComponent as Place } from '../assets/img/place_black_24dp.svg';

export default function ScenicSpotCardModal(props) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col mb-4 lg:flex-row">
                <img className=" w-full rounded-xl mb-4 lg:w-1/2 lg:mr-16" src={(props.data.Picture && props.data.Picture.PictureUrl1) || df_img} alt={props.data.Picture && props.data.Picture.PictureDescription1} />
                <div className="flex flex-col lg:mt-2">
                    <h1 className="text-2xl  df-ft-fm main-color mb-2">{props.data.ScenicSpotName}</h1>
                    <div className="flex mb-1"> <div><Schedule className="h-6 w-5 mr-3 word-color" /></div><span >{props.data.OpenTime}</span> </div>
                    <div className="flex mb-1"> <div><Phone className="h-6 w-5 mr-3 word-color" /></div><span >{props.data.Phone}</span> </div>
                    <div className="flex mb-1"> <div><Place className="h-6 w-5 mr-3 word-color" /></div><span >{props.data.Address}</span></div>
                </div>
            </div>
            <div>
                {props.data.TravelInfo &&
                    <div className="mb-4">
                        <h2 className="main-color df-ft-fm text-xl mb-2">交通方式</h2>
                        <div dangerouslySetInnerHTML={{ __html: props.data.TravelInfo }} />
                    </div>}
                <div className="mb-4">
                    <h2 className="main-color df-ft-fm text-xl mb-2">描述</h2>
                    {props.data.DescriptionDetail}
                </div>

            </div>
        </div >
    )
}