import Link from "next/link";
import { useState } from "react";

function ScratchArt({item, id}) {
    const [open, useOpen] = useState(false)
    return ( 
        <li className="w-11/12 border-2 rounded-md shadow-xl h-fit my-3 mx-auto">
            <Link href={item.link}>
                <a href="#" className="text-lg border-2 border-b-black hover:text-blue-600">{item.title}</a>
            </Link>
            <span></span>
            <p className="text-base">{item.summary}</p>
            <p className="text-base">Source: <span className="font-bold">{item.author}</span></p>
        </li>
     );
}

export default ScratchArt;