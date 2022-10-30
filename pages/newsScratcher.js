import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchScratcherNews } from "../lib/newsSlice";
import ScratchArt from "../components/ScratcherArticle";
import { useState } from "react";

function NewScratcher() {
    const currencies = [
        {currency:'AUD', text:'australian dollar forecast' },
        {currency:'CAD', text:'canadian dollar forecast' },
        {currency:'CHF', text:'swiss franc forecast' },
        {currency:'EUR', text:'euro forecast' },
        {currency:'GBP', text:'pound forecast' },
        {currency:'JPY', text:'japanese yen forecast' },
        {currency:'NZD', text:'new zealand dollar forecast' },
        {currency:'USD', text:'united states dollar forecast' },
    ]
    const [whatsActive, setWhatsActive] = useState("USD")
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchScratcherNews('united states dollar forecast'))
    },[dispatch])
    const scratcherNews = useSelector(state=>state.news.scratcherNews)
    console.log(scratcherNews)
    return ( 
        <div className='max-w-screen min-h-screen'>
            <div className="w-full">
                <h1 className="text-center text-2xl">Newscratcher API</h1>
            </div>
            <div className="w-11/12 flex flex-row justify-between mx-auto my-2 p-2 border-gray-300 rounded-md shadow-md">
                {
                    currencies.map((el,id)=>{
                        return <button 
                                    key={id} 
                                    id={el.currency} 
                                    onClick={(e)=>{setWhatsActive(el.text); dispatch(fetchScratcherNews(el.text))}} 
                                    className={whatsActive == el.text ? "w-[5rem] p-1 rounded-md bg-blue-400 shadow-xl active:shadow-inner active:shadow-black": "w-[5rem] p-1 rounded-md bg-blue-300 shadow-xl hover:bg-blue-400 active:shadow-inner active:shadow-black"}>
                                        {el.currency}
                               </button>
                    })
                }
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