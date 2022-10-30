import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchScratcherNews } from "../lib/newsSlice";
import ScratchArt from "../components/ScratcherArticle";

function NewScratcher() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchScratcherNews('united states dollar forecast'))
    },[])
    const scratcherNews = useSelector(state=>state.news.scratcherNews)
    console.log(scratcherNews)
    return ( 
        <div className='max-w-screen min-h-screen'>
            <div className="w-full">
                <h1 className="text-center text-2xl">Newscratcher API</h1>
            </div>
            <ul>
                {
                    scratcherNews.map((el,id)=>{
                        return <ScratchArt key={id} item={el}  id={id} />
                    })
                }
            </ul>
        </div>
     );
}

export default NewScratcher;