//? currentPage = pagina actual
//? residents = Arreglo total de residentes en la dimensiona ctual
const paginationLogic = (currentPage, residents) => {
    //! Excepción para el primer render
    if (!residents || residents.length === 0) {
        return {
            pages: [1],
            residentsInPage: [],
        }
    }

    //* La cantidad de residentes por pagina
    const RESIDENTS_PER_PAGE = 20

    //* Cantidad total de paginas que vamos a tener
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

    const sliceEnd = currentPage * RESIDENTS_PER_PAGE
    const sliceStart = sliceEnd - RESIDENTS_PER_PAGE

    //* Saber los residentes que se van a mostrar en la pagina actual
    const residentsInPage = residents.slice(sliceStart, sliceEnd)
    
    //* Generación de arreglo de las paginas que se van a mostrar
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    return {
        residentsInPage,
        pages,
    }

}   


export {
    paginationLogic
}