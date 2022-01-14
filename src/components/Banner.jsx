import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { clean_data, fetch_scenicspots_begin } from "../actions";
import { ReactComponent as Search } from '../assets/img/search_white_24dp.svg';
import { region_lst } from "../constants/region_lst";
const fetch_lim = 36;
export default function Banner() {
    const [region, setRegion] = useState('all');
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clean_data());
        console.log(Math.random() * region_lst.length)
        dispatch(fetch_scenicspots_begin(region_lst[Math.floor(Math.random() * region_lst.length)].eng, "", 0, fetch_lim));
    }, [dispatch])
    return (
        <div className="banner">
            <div className="wrap flex flex-col items-center">
                <h1 className="text-white decor tracking-widest df-ft-fm text-sm lg:text-lg mt-4 lg:mt-8 mb-4">TRAVEL AROUND TAIWAN, BE FUN!</h1>
                <div className="w-full md:w-96 flex justify-center items-center mb-4">
                    <input className="input w-full h-9 rounded-l df-ft-fm" placeholder="輸入目的地、景點或相關關鍵字" onChange={(e) => setKeyword(e.target.value)}></input>
                    <div className="btn main-bg-color h-9 rounded-r flex w-8 justify-center items-center" onClick={() => { dispatch(clean_data()); dispatch(fetch_scenicspots_begin(region, keyword, 0, fetch_lim)); }}>
                        <Search />
                    </div>
                </div>
                <div className="w-full flex flex-wrap">
                    <div className={"region-badge " + (region === 'all' ? 'region-badge-selected ' : ' ')} onClick={() => setRegion('all')}>全部</div>
                    {region_lst.map(item => (
                        <div key={item.id} className={"region-badge " + (region === item.eng ? 'region-badge-selected ' : ' ')} onClick={() => setRegion(item.eng)}>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div >
        </div >
    )
}