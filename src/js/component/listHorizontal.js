import React, { useContext, useEffect } from "react"
import PropTypes from 'prop-types';
import { Context } from "../store/appContext"

/**
 * Este componente toma el tipo del elemento, realiza la peticion fetch y muestra la lista horizontal
 * en tarjetas
 */

const ListHorizontal = ({ element }) => {
  const { store, actions } = useContext(Context)
  const [searchParams, setSearchParams] = useSearchParams()  
  const [pages, setPages] = useState(0)
  const [records, setRecords] = useState(0)

  useEffect(()=>{
    actions.fetchStarWars(element)
  },[])
  
  function checkFavorite(elementId){    
    return store.favorites.some(item=>item.id==`${element}/${elementId}`)
  }

  function imgError(e){
    e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
  }

  return <div className="overflow-auto d-flex w-100">
    <h5>Total elements: {records}</h5>
    {store[element]?.map(item => (
      <div key={item.uid} className="card" style={{ minWidth: "200px" }}>
        <img src={item.img} onError={imgError} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <button href="#" 
          className= {`btn btn${checkFavorite(item.uid)?"":"-outline"}-warning`}
          onClick={()=>actions.markFavorite(`${element}/${item.uid}`,item.name)}>
            <i className={`bi bi-heart`}></i>
          </button>
        </div>
      </div>
    )) || <p>Loading {element}...</p>}
  </div>
}

ListHorizontal.propTypes={
  element:PropTypes.string
}

export default ListHorizontal
