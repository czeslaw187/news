import axios from 'axios'
import News from '../components/News'
import { useState, useEffect } from 'react'

export default function Home() {
  const [newsList,useNewsList] = useState([]) 

  return (
    <div className='w-screen h-screen bg-gradient-to-br from-indigo-500'>
      <div className='w-11/12 text-center mx-auto pt-5'>
        <h3 className='border-2 rounded-md border-slate-600 py-2'>My app</h3>
      </div>
      <div className="mx-auto w-5/12 text-center py-5">
        <button onClick={()=>{handleNews().then(resp=>{useNewsList(resp.data)})}} className='rounded-md w-full bg-lime-300 hover:bg-lime-200 active:shadow-inner active:shadow-black border-2 px-5 mx-auto py-1'>Fetch</button>
      </div>
      <div className='flex flex-col w-11/12 border-2 rounded-sm mx-auto my-3 p-3 shadow-md border-slate-500'>
        {
          newsList.message ?? <div>{newsList.message}</div>
        }
      </div>
    </div>
  )
}

function handleNews(){
  return axios.get(process.env.NEXT_PUBLIC_URL + '/api/getNews')
}