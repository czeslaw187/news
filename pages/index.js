import News from '../components/News'
import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {fetchNews}  from '../lib/newsSlice.js'

function Home() {
  const dispatch = useDispatch()
  const news = useSelector((state)=>state.news)
  return (
    <div className='max-w-screen min-h-screen'>
      <div className="mx-auto w-5/12 text-center py-5">
        <button onClick={()=>dispatch(fetchNews())}  className='rounded-md w-full bg-lime-300 hover:bg-lime-200 active:shadow-inner active:shadow-black border-2 px-5 mx-auto py-1'>Fetch</button>
      </div>
      <div className='flex flex-col w-11/12 border-2 rounded-sm mx-auto my-3 p-3 shadow-md border-slate-500'>
        <ul>
          <li key={'labels'} className='grid grid-cols-6 gap-x-2 w-full border-2 border-md border-green-700 my-2 p-1 text-end text-bolder text-xs md:text-base'>
            <p key={'date'}>Date</p>
            <p key={'country'}>Country</p>
            <p key={'impact'}>Impact</p>
            <p key={'title'}>Title</p>
            <p key={'forecast'}>Forecast</p>
            <p key={'previous'}>Previous</p>
          </li>
          { 
            news.news.length > 0 ? news.news.map((el,id)=>{
              return <News key={id} item={el} id={id} />
            }): null
          }
        </ul>
      </div>
    </div>
  )
}

export default Home