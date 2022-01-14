import Banner from "../components/Banner";
import Header from "../components/Header";
import MiniDataBlock from "../components/MiniDataBlock";
import ScenicSpotCard from "../components/ScenicSpotCard";
import ScenicSpotCardList from "../components/ScenicSpotCardList";
import navbar_items from "../constants/navbar_items";

function* printNumber() {
    for (let i = 0; i <= 10; i += 1) {
        yield console.log(i);
    }
}
export default function Main() {
    return (
        <div className=" bg-gray-100">
            <Header />
            <Banner />
            <MiniDataBlock name={navbar_items[0].name} eng={navbar_items[0].eng} >
                <ScenicSpotCardList />
            </MiniDataBlock>
            <div>footer</div>
        </div>
    );
}