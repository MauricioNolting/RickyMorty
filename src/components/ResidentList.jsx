import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import { paginationLogic } from "../utils/pagination"

const ResidentList = ({residents}) => {

const [currentPage, setCurrentPage] = useState(1)



const {pages, residentsInPage} = paginationLogic(currentPage, residents)


useEffect(() => {
 setCurrentPage(1)
}, [residents])

  return (
    <section>
    <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center gap-6 max-w-[1000px] mx-auto py-10">
        {
        residentsInPage?.map((resident) => (
            <ResidentCard key={resident} residentEndPoint={resident}/>
        ))
}
    </section>
    {/* paginacion */}
  
    <ul className="text-lg flex gap-16 justify-center flex-wrap bottom-3 relative bg-black">
      {pages.map((page) => (
      <li className="bg-black" key={page}>
        <button className={`fixed bottom-4  p-2 rounded-full w-12 h-12 border-y-[#EDE288] border-y-4 border-x-[#893446] border-x-4 hover:border-y-[#893446] hover:border-x-[#EDE288] hover:bg-[#4f3345c5] hover:text-white transition-all duration-200 ${page === currentPage ? "bg-[#893446] text-black animate-pulse" : "bg-white text-black"}`} onClick={() => setCurrentPage(page)}>{page}</button>
      </li>))}
    </ul>

    </section>
    
  )
}

export default ResidentList