import Link from "next/link";

function Navbar() {
    return ( 
        <div className="w-full h-[3rem] bg-gradient-to-br from-lime-200 py-3">
            <ul className="flex flex-row-reverse pl-3 justify-end">
                <li className="px-3">
                    <Link href={'/myNews'}>News</Link>
                </li>
                <li className="px-3">
                    <Link href={'/'}>Home</Link>
                </li>
            </ul>
        </div>
     );
}

export default Navbar;