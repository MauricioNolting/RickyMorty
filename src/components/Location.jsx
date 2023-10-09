import { IconSearch } from "@tabler/icons-react"
import axios from "axios"

/* eslint-disable react/prop-types */
const Location = ({location, setLocation}) => {


  // parasolicitud de personaje
//filtrar personaje con el texto
//const personajeFiltered = location.filter(location => location.name.toLowerCase().includes(location?.resident.origin.name))


const handleSubmit = (e) => {
  e.preventDefault()
  const idLocation = e.target.idLocation.value

axios
  .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
  .then(({data}) => setLocation(data))
  .catch((err) => console.log(err))
}




  return (


    <section className="relative w-[400px] top-6 mx-auto grid gap-5 items-center">
      {/* la imagen hacer que gire */}
        {/* <div className="overflow-hidden"></div> */}


{/* submit de id */}
      <form onSubmit={handleSubmit} className="flex border-black w-[220px] mx-auto">
        <input placeholder="Type a new location" name="idLocation" className="text-black px-2 rounded-l-2xl" type="number" />
        <button type="submit" className="flex gap-2 px-2 rounded-r-full bg-[#ddc407] hover:text-[#8b6c73] transition-all duration-200"> Search  <IconSearch className="relative top-[2px]" size={18}/> </button>
      </form>


     {/* Para solicitud del pesonaje */}

  

    <section className="bg-[#893446] text-center text-xl relative text-white font-light grid gap-3 rounded-md w-auto mx-auto px-2">
        <h3 className="relative top-2">!Wellcome to <span className="font-extrabold text-[#EDE288]">{location?.name}!</span></h3>

        <ul className="flex gap-3 mx-4 text-center text-white text-sm">
            <li>Type: <span className="text-cyan-100">{location?.type}</span></li>
            <li>Dimension: <span className="text-cyan-100">{location?.dimension}</span></li>
            <li>Population: <span className="text-cyan-100">{location?.residents.length ?? []}</span></li>
        </ul>
        </section>
    </section>


  )
}
export default Location