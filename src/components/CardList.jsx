import { useEffect, useState } from "react";
import { ReactComponent as ArrowBack } from '../assets/img/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../assets/img/arrow_forward.svg';
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import Modal from "./Modal";

const jump = 3
export default function CardList(props) {
    const [focusIdx, setFocusIdx] = useState(0);
    const [swiper1, setSwiper1] = useState(null);
    const [swiper2, setSwiper2] = useState(null);
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => { setFocusIdx(0); }, [props.data_list]);
    useEffect(() => { swiper1 && swiper1.slideTo(0); swiper2 && swiper2.slideTo(0) }, [swiper1, swiper2, props.data_list])

    SwiperCore.use([Navigation, Autoplay, Pagination]);
    return (<>
        <div className="sm:hidden">
            <Swiper
                slidesPerView={1}
                navigation={true}
                onSwiper={setSwiper1}
            >
                {props.data_list.map((data, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <div className="flex justify-center py-4" >
                                <div onClick={() => { setShow(true); setModalData(data) }}>
                                    <props.component data={data} />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
        <div className="hidden sm:block md:hidden">
            <Swiper
                slidesPerView={1}
                navigation={true}
                onSwiper={setSwiper2}
            >
                {props.data_list.map((data, idx, arr) => {
                    return (idx % 2 === 0 ?
                        <SwiperSlide key={idx}>
                            <div className="flex justify-center py-8" >
                                <div onClick={() => { setShow(true); setModalData(props.data_list[idx]) }}>
                                    <props.component data={props.data_list[idx]} />
                                </div>
                                <div onClick={() => { setShow(true); setModalData(props.data_list[idx + 1]) }}>
                                    <props.component data={props.data_list[idx + 1]} />
                                </div>
                            </div>
                        </SwiperSlide>
                        : <div key={idx}>
                        </div>
                    );
                })}
            </Swiper>
        </div>
        <div className="hidden md:block">
            <div className="flex items-center justify-between">
                <div>
                    {focusIdx !== 0 ?
                        <ArrowBack className="btn" onClick={() => setFocusIdx(focusIdx - jump)} fill="gray" />
                        :
                        <ArrowBack className="" fill="#CCCCCC" />}
                </div>
                <div className="w-11/12 flex justify-between">
                    <div onClick={() => { setShow(true); setModalData(props.data_list[focusIdx]) }}>
                        <props.component data={props.data_list[focusIdx]} />
                    </div>
                    <div onClick={() => { setShow(true); setModalData(props.data_list[focusIdx + 1]) }}>
                        <props.component data={props.data_list[focusIdx + 1]} />
                    </div>
                    <div onClick={() => { setShow(true); setModalData(props.data_list[focusIdx + 2]) }}>
                        <props.component data={props.data_list[focusIdx + 2]} />
                    </div>
                </div>
                <div>
                    {focusIdx + 3 < props.data_list.length ?
                        <ArrowForward className="btn" onClick={() => setFocusIdx(focusIdx + jump)} fill="gray" />
                        :
                        <ArrowForward className="" fill="#CCCCCC" />
                    }
                </div>
            </div>
        </div>
        <Modal show={show} setShow={setShow} data={modalData} component={props.modalComponent} >
        </Modal>
    </>
    );
}