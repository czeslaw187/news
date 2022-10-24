import axios from 'axios'
import News from '../components/News'
import { useState, useEffect } from 'react'

export default function Home() {
  const [newsList,setNewsList] = useState([]) 
  return (
    <div className='w-screen'>
      <div className='w-11/12 text-center mx-auto pt-5'>
        <h3 className='border-2 rounded-md border-slate-600 py-2'>My app</h3>
      </div>
      <div className="mx-auto w-5/12 text-center py-5">
        <button onClick={()=>{handleNews().then(resp=>{setNewsList(resp.data)})}} className='rounded-md w-full bg-lime-300 hover:bg-lime-200 active:shadow-inner active:shadow-black border-2 px-5 mx-auto py-1'>Fetch</button>
      </div>
      <div className='flex flex-col w-11/12 border-2 rounded-sm mx-auto my-3 p-3 shadow-md border-slate-500'>
        <ul>
          <li key={'labels'} className='grid grid-cols-6 w-full border-2 border-md border-green-700 my-2 p-1 text-end text-bolder'>
            <p key={'date'} className='pr-4'>Date</p>
            <p key={'country'} className='pr-[4rem]'>Country</p>
            <p key={'impact'} className='pr-[4rem]'>Impact</p>
            <p key={'title'} className='pr-[4rem]'>Title</p>
            <p key={'forecast'} className='pr-[4rem]'>Forecast</p>
            <p key={'previous'} className='pr-[4rem]'>Previous</p>
          </li>
          {
            newsList?.map((el,id)=>{
              return <News key={id} item={el} id={id} />
            })
          }
        </ul>
      </div>
    </div>
  )
}

function handleNews(){
  return axios.get(process.env.NEXT_PUBLIC_URL + '/api/getNews')
}