

const Filtro = ({setTexto, texto}) => {



const hadleInputChange = ({target}) => {
  setTexto(target.value) 
}

const handleSubmit = (e) => {
  e.preventDefault()

  console.log(texto)
}


  return (
    <div>

    <section>
      <form onSubmit={handleSubmit} className="text-black">
        <input type="text" name="search" placeholder="nombre del personaje" value={texto} onChange={hadleInputChange}/>
        <button type="submit">Buscar</button>
      </form>
    </section>
    </div>
  )
}
export default Filtro