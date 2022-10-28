import Link from "next/link";

function CurNews({item}) {
    const date = new Date(item.publishedAt)
    return ( 
        <li className="w-11/12 border-2 rounded-md shadow-xl h-fit my-3 mx-auto">
            <h1 className="text-xl border-b-gray-900 border-2">{item.title}</h1>
            <p>Source: <span className="font-bold">{item.source.name}</span></p>
            <p>Date released: {date.toLocaleString()}</p>
            <p className="hover:text-blue-600">URL: <Link href={item.url}>{item.url}</Link></p>
        </li>
     );
}

export default CurNews;