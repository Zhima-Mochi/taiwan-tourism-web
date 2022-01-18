import { Component, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MiniDataBlock from "../components/MiniDataBlock";
import Modal from "../components/Modal";
import ScenicSpotCardList from "../components/ScenicSpotCardList";
import ScenicSpotCardModal from "../components/ScenicSpotModal";
import navbar_items from "../constants/navbar_items";

function* printNumber() {
    for (let i = 0; i <= 10; i += 1) {
        yield console.log(i);
    }
}
export default function Main() {
    return (
        <div className=" bg-gray-100 ">
            <div className="flex flex-col justify-between min-h-screen">
                <div>
                    <Header />
                    <Banner />
                    <MiniDataBlock name={navbar_items[0].name} eng={navbar_items[0].eng} >
                        <ScenicSpotCardList />
                    </MiniDataBlock>
                </div>
                <div>footer</div>
            </div>
        </div>
    );
}