import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ScenicSpotCard from "./ScenicSpotCard";
import { ReactComponent as ArrowBack } from '../assets/img/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../assets/img/arrow_forward.svg';

const jump = 3
export default function ScenicSpotCardList(props) {
    const [focusIdx, setFocusIdx] = useState(0);
    const scenicspot_data = useSelector(state => state.scenicspot_data);
    useEffect(() => { setFocusIdx(0) }, [scenicspot_data]);
    return (
        <div className="hidden sm:block">
            <div className="flex items-center justify-between">
                <div>
                    {focusIdx !== 0 ?
                        <ArrowBack className="btn" onClick={() => setFocusIdx(focusIdx - jump)} fill="gray" />
                        :
                        <ArrowBack className="" fill="#CCCCCC" />}
                </div>
                <div className="w-11/12 flex justify-between">
                    <ScenicSpotCard data={scenicspot_data[focusIdx]} />
                    <ScenicSpotCard data={scenicspot_data[focusIdx + 1]} />
                    <ScenicSpotCard data={scenicspot_data[focusIdx + 2]} />
                </div>
                <div>
                    {focusIdx + 3 < scenicspot_data.length ?
                        <ArrowForward className="btn" onClick={() => setFocusIdx(focusIdx + jump)} fill="gray" />
                        :
                        <ArrowForward className="" fill="#CCCCCC" />
                    }
                </div>
            </div>
        </div>
    );
}