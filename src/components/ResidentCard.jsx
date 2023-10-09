import axios from "axios"
import { useEffect, useState } from "react"

const ResidentCard = ({residentEndPoint}) => {

const [resident, setResident] = useState(null)



//TODO (alive, dead or unknown)
const characterStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500"
}


    useEffect(() => {
          axios.get(residentEndPoint)
          .then(({data}) => setResident(data))
          .catch((err) => console.log(err))
    }, [])
    
  return (
    <article className="bg-[#C9BEDC] rounded-t-full border-4 border-[#893446]">
        <header className="relative">
            {/*  Status */}
            <img className="border-spacing-2 border-[#893446] object-cover rounded-full" src={resident?.image} alt="" />
            <div className="absolute bottom-28 left-1/2 -translate-x-1/2 px-5 py-2 rounded-md flex items-center gap-2">
            <div className={`h-3 w-3 bg-green-500 rounded-full ${characterStatus[resident?.status]}`}></div>
<span>{resident?.status}</span>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 border-[#893446] border-t-4">
            <h4 className="col-start-1 col-span-2 text-center text-4xl mt-2 bg-[#EDE288] text-[#893446]">{resident?.name}</h4>
            <ul className="row-star-1 col-span-2 flex h-10 space-x-3 justify-self-center items-center text-[#893446]">
                <li> Species <span className="text-[#fff]">{resident?.species}</span> </li>
                <li> Origin <span className="text-[#fff]">{resident?.origin.name}</span> </li>
                <li> Times appear <span  className="text-[#fff]">{resident?.episode.length}</span></li>
            </ul>
            </div>
        </header>

    </article>
  )
}
export default ResidentCard