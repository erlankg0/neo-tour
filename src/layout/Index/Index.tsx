import Intro from "../../components/intro/intro.tsx";
import CardList from "../Cards/CardList.tsx";
import Discover from "../../components/tabs/Discover.tsx";

const Index = () => {
    return (
        <div>
            <Intro/>
            <Discover id={'tabs'}/>
            <CardList/>
        </div>
    )
}

export default Index