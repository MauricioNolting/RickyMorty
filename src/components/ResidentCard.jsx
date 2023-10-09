import axios from "axios"
import { useEffect, useState } from "react"
import Modal from "./Modal";

const ResidentCard = ({residentEndPoint}) => {
//modal
const [modalOpen, setModalOpen] = useState(false);

const openCloseModal = () => {
  setModalOpen(!modalOpen)
  console.log("modal abierto")
};


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
    <article className=" hover:border-[#ddda0c00] transition-all duration-200  bg-[#C9BEDC] rounded-t-full border-4 border-[#893446] cursor-pointer" onClick={openCloseModal}>
        <header className="relative">
            {/*  Status */}
            <img className="border-2 border-[#893446] object-cover rounded-full" src={resident?.image} alt="" />
            <div className="text-sm absolute bottom-32 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md flex items-center gap-2 bg-[#f5fbfeb7] text-black border-2 border-[#893446]">
            <div className={`h-3 w-3 bg-green-500 rounded-full ${characterStatus[resident?.status]}`}></div>
<span>{resident?.status}</span>
            </div>

            <div className="border-[#893446] border-t-4">
            <h4 className="col-start-1 col-span-2 text-center text-xl mt-2 bg-[#EDE288] text-[#893446]">{resident?.name}</h4>
            <ul className=" flex flex-col justify-start pl-2 text-[#893446]">
                <li> Species <span className="text-[#fff]  ">{resident?.species}</span> </li>
                <li> Origin <span className="text-[#fff]">{resident?.origin.name}</span> </li>
                <li> Times appear <span  className="text-[#fff]">{resident?.episode.length}</span></li>
            </ul>
            </div>
        </header>

{/* abrir y cerrar modal */}
     
        <Modal isOpen={modalOpen} openCloseModal={openCloseModal} resident={resident} characterStatus={characterStatus}/>
    
    </article>
  )
}
export default ResidentCard