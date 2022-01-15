import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ScenicSpotCard from "./ScenicSpotCard";
import CardList from "./CardList";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

export default function ScenicSpotCardList(props) {
    const scenicspot_data = useSelector(state => state.scenicspot_data);
    return (
        <CardList component={ScenicSpotCard} data_list={scenicspot_data} />
    );
    // return (<>
    //     <div className="sm:hidden">
    //         <Swiper
    //             slidesPerView={1}
    //             navigation={true}
    //         >
    //             {scenicspot_data.map((data) => {
    //                 return (
    //                     <SwiperSlide key={data.ScenicSpotID}>
    //                         <div className="flex justify-center py-4">
    //                             <ScenicSpotCard data={data} />
    //                         </div>
    //                     </SwiperSlide>
    //                 );
    //             })}
    //         </Swiper>
    //     </div>
    //     <div className="hidden sm:block md:hidden">
    //         <Swiper
    //             slidesPerView={1}
    //             navigation={true}
    //         >
    //             {scenicspot_data.map((data, idx, arr) => {
    //                 return (idx % 2 === 0 ?
    //                     <SwiperSlide key={data.ScenicSpotID}>
    //                         <div className="flex justify-center py-8">
    //                             <ScenicSpotCard data={scenicspot_data[idx]} />
    //                             <ScenicSpotCard data={scenicspot_data[idx + 1]} />
    //                         </div>
    //                     </SwiperSlide>
    //                     : <>
    //                     </>
    //                 );
    //             })}
    //         </Swiper>
    //     </div>
    //     <div className="hidden md:block">
    //         <div className="flex items-center justify-between">
    //             <div>
    //                 {focusIdx !== 0 ?
    //                     <ArrowBack className="btn" onClick={() => setFocusIdx(focusIdx - jump)} fill="gray" />
    //                     :
    //                     <ArrowBack className="" fill="#CCCCCC" />}
    //             </div>
    //             <div className="w-11/12 flex justify-between">
    //                 <ScenicSpotCard data={scenicspot_data[focusIdx]} />
    //                 <ScenicSpotCard data={scenicspot_data[focusIdx + 1]} />
    //                 <ScenicSpotCard data={scenicspot_data[focusIdx + 2]} />
    //             </div>
    //             <div>
    //                 {focusIdx + 3 < scenicspot_data.length ?
    //                     <ArrowForward className="btn" onClick={() => setFocusIdx(focusIdx + jump)} fill="gray" />
    //                     :
    //                     <ArrowForward className="" fill="#CCCCCC" />
    //                 }
    //             </div>
    //         </div>
    //     </div>
    // </>
    // );
}