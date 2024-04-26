import Intro from "../../components/intro/intro.tsx";
import CardList from "../Cards/CardList.tsx";
import Discover from "../../components/discover/Discover.tsx";
import {useCallback, useRef} from "react";

const MainPage = () => {
    const myRef = useRef<HTMLDivElement>(null)

    const scrollToMyRef = useCallback(() => {
        myRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [])

    return (
        <div>
            <Intro scrollToMyRef={scrollToMyRef}/>
            <Discover forwardedRef={myRef}/>
            <CardList/>
        </div>
    )
}

export default MainPage;