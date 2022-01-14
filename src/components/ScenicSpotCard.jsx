import df_img from "../assets/img/default-image.png"
import { ReactComponent as Schedule } from '../assets/img/schedule_black_24dp.svg';
import { ReactComponent as Phone } from '../assets/img/phone_black_24dp.svg';
import { ReactComponent as Place } from '../assets/img/place_black_24dp.svg';
const text_setting = "font-sans text-xs font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-5/6"
export default function ScenicSpotCard(props) {
    if (props.data) {
        return (
            <div className="bg-white card btn shadow-xl">
                <img className="card-img" src={props.data.Picture.PictureUrl1 || df_img} alt="" />
                <div className="card-content flex flex-col justify-between py-2 px-3  word-color">
                    <h1 className="font-sans text-md font-bold text-ellipsis whitespace-nowrap overflow-hidden">{props.data.ScenicSpotName}</h1>
                    <div className="flex items-center"> <Schedule className="h-3 w-3 mr-1 word-color"/><span className={text_setting}>{props.data.OpenTime}</span> </div>
                    <div className="flex items-center"> <Phone className="h-3 w-3 mr-1 word-color"/><span className={text_setting}>{props.data.Phone}</span> </div>
                    <div className="flex items-center"> <Place className="h-3 w-3 mr-1 word-color"/><span className={text_setting}>{props.data.Address}</span></div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card">
            </div>
        )
    }
}