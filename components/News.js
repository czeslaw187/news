function News({item, id}) {
    const date = new Date(item.date)
    return ( 
        <li key={id} className='grid grid-cols-6 w-full border-2 border-md border-green-700 my-2 p-1 text-start font-bold text-xs md:text-base shadow-xl'>
            <p key={'date_'+id} className="mx-auto">{date.toLocaleString()}</p>
            <p key={`country_`+id} className="mx-auto">{item.country}</p>
            <p key={`impact_`+id} className={item.impact == 'High' ? 'text-red-700 mx-auto' : item.impact == "Medium" ? 'text-orange-600 mx-auto' : 'text-lime-700 mx-auto'}>{item.impact}</p>
            <p key={`title_`+id} className="mx-auto">{item.title}</p>
            <p key={`forecast_`+id} className="mx-auto">{item.forecast}</p>
            <p key={`preious_`+id} className="mx-auto">{item.previous}</p>
        </li>
     );
}

export default News;