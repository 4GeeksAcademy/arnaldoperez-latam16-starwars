import React, { useContext, useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Context } from "../store/appContext"

/**
 * Este componente toma el tipo del elemento, realiza la peticion fetch y muestra la lista horizontal
 * en tarjetas
 */

const ListPages = ({ element }) => {
  const { store, actions } = useContext(Context)
  const [searchParams, setSearchParams] = useSearchParams()
  
  const [pages, setPages] = useState()


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

    //Paginacion:
    <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {
            new Array(pages).fill("").map((item,index)=>
            <li key={index+1} className={`page-item ${searchParams.get("page")==index+1?"active":""}`}>
              <Link className="page-link" to={`/planets?page=${index+1}`}>{index +1 }</Link>
            </li>
            )
          }
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <h3>Pagina {searchParams.get("page")}</h3>
  </div>
}

ListHorizontal.propTypes={
  element:PropTypes.string
}

export default ListHorizontal
