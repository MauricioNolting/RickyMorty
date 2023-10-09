import { useEffect, useState } from 'react'
import './App.css'
import {getRandomNumber} from './utils/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'


function App() {


  const [location, setLocation] = useState(null)
 


  console.log(location?.residents)
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err))
  }, [])

  console.log(location?.residents)

  return (
    <div className='min-h-screen' style={{ backgroundImage: 'url("/rickYMortyFondoPC.png")', fontFamily: 'Bebas Neue' }}>
    <main className='bg-gradient-to-l from-[#000000] to-[#893446c4] px-4 min-h-screen text-white'>
        <Location location={location} setLocation={setLocation}/>
        <ResidentList residents={location?.residents}/>
      </main>
      </div>
  )
}

export default App
