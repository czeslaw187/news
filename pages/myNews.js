import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrencyNews } from "../lib/newsSlice";
import CurNews from "../components/CurrencyNews";

function myNews() {
    const dispatch = useDispatch()
    const currency = useSelector((state)=>state.news.currencyNews)

    useEffect(()=>{
        dispatch(fetchCurrencyNews('australian dollar'))
    },[])
    console.log(currency, 'surrency')
    return ( 
        <div className="min-h-screen w-full pl-5 pt-5">
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

export default myNews;