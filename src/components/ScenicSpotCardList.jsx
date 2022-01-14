import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ScenicSpotCard from "./ScenicSpotCard";

const jump = 3
export default function ScenicSpotCardList(props) {
    const [focusIdx, setFocusIdx] = useState(0);
    const scenicspot_data = useSelector(state => state.scenicspot_data);
    useEffect(() => { setFocusIdx(0) }, [scenicspot_data]);
    return (
        <div className="hidden sm:block">
            <div className="flex items-center justify-between">
                <div>
                    {focusIdx !== 0 ? <div className="btn w-4 h-40 flex items-center" onClick={() => setFocusIdx(focusIdx - jump)}>
                        <div className="text-center text-xl font-bold text-gray-500">〈</div>
                    </div> :
                        <div className="w-4"></div>}
                </div>
                <div className="flex justify-between">
                    <ScenicSpotCard data={scenicspot_data[focusIdx]} />
                    <ScenicSpotCard data={scenicspot_data[focusIdx + 1]} />
                    <ScenicSpotCard data={scenicspot_data[focusIdx + 2]} />
                </div>
                <div>
                    {focusIdx + 3 < scenicspot_data.length ? <div className="btn w-4 h-40 flex items-center" onClick={() => setFocusIdx(focusIdx + jump)}>
                        <div className="text-center text-xl font-bold text-gray-500">〉</div>
                    </div> :
                        <div className="w-4"></div>
                    }
                </div>
            </div>
        </div>
    );
}