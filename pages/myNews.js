import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencyNews } from "../lib/newsSlice";
import CurNews from "../components/CurrencyNews";
import { activeCurrency } from "../lib/newsSlice";

function MyNews() {
    const dispatch = useDispatch()
    const currency = useSelector((state)=>state.news.currencyNews)
    const whatsActive = useSelector((state)=>state.news.currencyActive)
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
    return ( 
        <div className="min-h-screen w-full pl-5 pt-5">
            <div className="w-11/12 flex flex-row justify-between mx-auto my-2 p-2 border-gray-300 rounded-md shadow-md">
                {
                    currencies.map((el,id)=>{
                        return <button 
                                    key={id} 
                                    id={el.currency} 
                                    onClick={(e)=>{dispatch(activeCurrency(e.target.id)); dispatch(fetchCurrencyNews(el.text))}} 
                                    className={el.currency == whatsActive ? "w-[5rem] p-1 rounded-md bg-blue-400 shadow-xl active:shadow-inner active:shadow-black": "w-[5rem] p-1 rounded-md bg-blue-300 shadow-xl hover:bg-blue-400 active:shadow-inner active:shadow-black"}>
                                        {el.currency}
                               </button>
                    })
                }
            </div>
            <ul>
                {
                    currency ? currency.map((el, id)=>{
                        return <CurNews key={id} item={el} id={id}/>
                    }): null
                }
            </ul>
        </div>
     );
}

export default MyNews;