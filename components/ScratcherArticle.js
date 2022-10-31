import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

function ScratchArt({item, id}) {
    const [open, setOpen] = useState(false)
    return ( 
        <li className="w-11/12 border-2 rounded-md shadow-xl h-fit my-3 mx-auto p-2">
            <Link href={item.link}>
                <a href="#" className="text-lg border-2 border-b-black hover:text-blue-600">{item.title}</a>
            </Link>
            <p onClick={()=>{setOpen(!open)}} className="w-full text-center hover:opacity-75 hover:bg-indigo-200"><FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} /></p>
            <p className={open ? "text-base animate-dropdown overflow-auto" : "text-base overflow-hidden h-0"}>
                {item.summary}
            </p>
            <p className="text-base">Source: <span className="font-bold">{item.author}</span></p>
        </li>
     );
}

export default ScratchArt;