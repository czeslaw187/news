import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencyNews } from "../lib/newsSlice";
import CurNews from "../components/CurrencyNews";

function MyNews() {
    const dispatch = useDispatch()
    const currency = useSelector((state)=>state.news.currencyNews)

    return ( 
        <div className="min-h-screen w-full pl-5 pt-5">
            <div className="w-11/12 flex flex-row justify-between mx-auto my-2 p-2 border-gray-300 rounded-md shadow-md">
                <button onClick={()=>{dispatch(fetchCurrencyNews('australian dollar forecast'))}} className="w-[5rem] p-1 rounded-md bg-blue-300 shadow-xl hover:bg-blue-400 active:shadow-inner active:shadow-black">AUD</button>
                <button onClick={()=>{dispatch(fetchCurrencyNews('canadian dollar forecast'))}} className="w-[5rem] p-1 rounded-md bg-blue-300 shadow-xl hover:bg-blue-400 active:shadow-inner active:shadow-black">CAD</button>
                <button onClick={()=>{dispatch(fetchCurrencyNews('swiss franc forecast'))}} className="w-[5rem] p-1 rounded-md bg-blue-300 shadow-xl hover:bg-blue-400 active:shadow-inner active:shadow-black">CHF</button>
                <button onClick={()=>{dispatch(fetchCurrencyNews('euro forecast'))}} className="w-[5rem] p-1 rounded-md bg-blue-300 shadow-xl hover:bg-blue-400 active:shadow-inner active:shadow-black">EUR</button>
                <button onClick={()=>{dispatch(fetchCurrencyNews('pound forecast'))}} className="w-[5rem] p-1 rounded-md bg-blue-300 shadow-xl hover:bg-blue-400 active:shadow-inner active:shadow-black">GBP</button>
                <button onClick={()=>{dispatch(fetchCurrencyNews('japanese yen forecast'))}} className="w-[5rem] p-1 rounded-md bg-blue-300 shadow-xl hover:bg-blue-400 active:shadow-inner active:shadow-black">JPY</button>
                <button onClick={()=>{dispatch(fetchCurrencyNews('new zealand dollar forecast'))}} className="w-[5rem] p-1 rounded-md bg-blue-300 shadow-xl hover:bg-blue-400 active:shadow-inner active:shadow-black">NZD</button>
                <button onClick={()=>{dispatch(fetchCurrencyNews('united states dollar forecast'))}} className="w-[5rem] p-1 rounded-md bg-blue-300 shadow-xl hover:bg-blue-400 active:shadow-inner active:shadow-black">USD</button>
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