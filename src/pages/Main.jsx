import Banner from "../components/Banner";
import Header from "../components/Header";

function* printNumber() {
    for (let i = 0; i <= 10; i += 1) {
        yield console.log(i);
    }
}
export default function Main() {
    return (
        <div>
            <Header />
            <Banner />
        </div>
    );
}