import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrencyNews } from "../lib/newsSlice";

function myNews() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCurrencyNews('australian'))
    },[fetchCurrencyNews])
    const currency = useSelector(state=>state.currencyNews)
    console.log(currency, 'surrency')
    return ( 
        <div className="min-h-screen w-full pl-5">
            <h3>My News</h3>
        </div>
     );
}

export default myNews;