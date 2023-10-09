import { useEffect, useState } from 'react'
import './App.css'
import {getRandomNumber} from './utils/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'


function App() {


  const [location, setLocation] = useState(null)
 


  
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err))
  }, [])

  

  return (
  <div>

{ 
    location === null ? <div className='flex flex-col justify-center bg-black min-h-screen items-center'>
      <img className="max-w-[400px]" src="rickYMortyPalabras.png" alt="" />
      <img className='animate-spin w-[400px] h-[400px]' src="portal.png" alt="" />
      <p className='text-white'>Cargando...</p> </div> 
    :
    <div className='min-h-screen' style={{ backgroundImage: 'url("/fondo2.jpg")', fontFamily: 'Bebas Neue' }}>
    <main className='bg-gradient-to-l from-[#000000] to-[#893446c4] px-4 min-h-screen text-white'>
        <Location location={location} setLocation={setLocation}/>
        <ResidentList residents={location?.residents}/>
      </main>
     
      </div>
}
      </div>
  )
}

export default App
