const Modal = ({ isOpen, resident, characterStatus}) => {


  if (isOpen === false) {
    return null;
  }

  return (
      <div className="absolute min-h-screen z-50 bg-[#ffffffd5] rounded-3xl transition-all duration-500 ">
        <div className="fixed z-[400] top-0 right-0 left-0 bottom-0 mx-auto my-auto max-w-[300px] max-h-[350px] border-white border-4 ">
            <header className="">
            {/*  Status */}
            <img className="border-spacing-2 h-[350px] border-[#893446] object-cover" src={resident?.image} alt="" />
            <div className="text-sm absolute bottom-32 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md flex items-center gap-2 bg-[#f5fbfeb7] text-black border-2 border-[#893446]">
            <div className={`h-3 w-3 bg-green-500 rounded-full ${characterStatus[resident?.status]}`}></div>
<span>{resident?.status}</span>
            </div>

            <div className="border-[#893446] border-t-4 bg-slate-600  border-4">
            <h4 className="col-start-1 col-span-2 text-center text-xl mt-2 bg-[#EDE288] text-[#893446]">{resident?.name}</h4>
            <ul className=" flex flex-col justify-start pl-2 text-[#eece3e]">
                <li> Species <span className="text-[#fff]  ">{resident?.species}</span> </li>
                <li> Origin <span className="text-[#fff]">{resident?.origin.name}</span> </li>
                <li> Times appear <span  className="text-[#fff]">{resident?.episode.length}</span></li>
            </ul>
            </div>
        </header>

      </div>
    </div>
  )
}

export default Modal
