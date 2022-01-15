import df_img from "../assets/img/default-image.png"
import { ReactComponent as Schedule } from '../assets/img/schedule_black_24dp.svg';
import { ReactComponent as Phone } from '../assets/img/phone_black_24dp.svg';
import { ReactComponent as Place } from '../assets/img/place_black_24dp.svg';
const text_setting = "font-sans text-sm sm:text-xs lg:text-sm font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-5/6"
export default function ScenicSpotCard(props) {
    if (props.data) {
        return (
            <div key={props.data.ScenicSpotID} className=" bg-white card btn shadow-md md:shadow-xl">
                <img className="card-img animate__animated  animate__fadeIn animate__faster" src={props.data.Picture.PictureUrl1 || df_img} alt="" />
                <div className="card-content animate__animated  animate__fadeIn animate__faster flex flex-col justify-around py-2  px-4  word-color">
                    <h1 className="font-sans text-lg sm:text-sm  lg:text-lg font-bold text-ellipsis whitespace-nowrap overflow-hidden">{props.data.ScenicSpotName}</h1>
                    <div className="flex items-center"> <Schedule className="h-3 w-3 mr-2 word-color" /><span className={text_setting}>{props.data.OpenTime}</span> </div>
                    <div className="flex items-center"> <Phone className="h-3 w-3 mr-2 word-color" /><span className={text_setting}>{props.data.Phone}</span> </div>
                    <div className="flex items-center"> <Place className="h-3 w-3 mr-2 word-color" /><span className={text_setting}>{props.data.Address}</span></div>
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