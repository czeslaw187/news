import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { activePage } from "../lib/newsSlice";

function Navbar() {
    const dispatch = useDispatch()
    const whatsActive = useSelector(state=>state.news.pageActive)
    const pages = [
        {title: 'News', route: '/myNews'},
        {title: 'Home', route: '/'}
    ]
    return ( 
        <div className="w-full h-[3rem] bg-gradient-to-br from-lime-200 py-3">
            <ul className="flex flex-row-reverse pl-3 justify-end">
                {
                    pages.map((el,id)=>{
                        return (
                            <li key={id} className="px-3">
                                <Link href={el.route}>
                                    <a href='#' id={el.title} onClick={(e)=>{dispatch(activePage(e.target.id))}} className={whatsActive == el.title ? 'underline' : 'no-underline'}>{el.title}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
     );
}

export default Navbar;