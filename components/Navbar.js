import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { activePage } from "../lib/newsSlice";

function Navbar() {
    const dispatch = useDispatch()
    const whatsActive = useSelector(state=>state.news.pageActive)
    console.log(whatsActive, 'navbar')
    return ( 
        <div className="w-full h-[3rem] bg-gradient-to-br from-lime-200 py-3">
            <ul className="flex flex-row-reverse pl-3 justify-end">
                <li className="px-3">
                    <Link href={'/myNews'}>
                        <a href='#' id="news" onClick={(e)=>{dispatch(activePage(e.target.id))}} className={whatsActive == 'news' ? 'underline' : 'no-underline'}>News</a>
                    </Link>
                </li>
                <li className="px-3">
                    <Link href={'/'}>
                        <a href='#' id="home" onClick={(e)=>{dispatch(activePage(e.target.id))}} className={whatsActive == 'home' ? 'underline' : 'no-underline'}>Home</a>
                    </Link>
                </li>
            </ul>
        </div>
     );
}

export default Navbar;