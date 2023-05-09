import React, {useState} from "react";
import "../../styles/home.css";
import ListPages from "../component/listPages";
import { useSearchParams, Link } from "react-router-dom";

export const Planets = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const [pages, setPages] = useState(5)

   return (
    <div className="text-center mt-5">
      <h1>Hello Planets!</h1>

      <ListPages element="planets" />
      {/* <nav aria-label="Page navigation example">
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
      <h3>Pagina {searchParams.get("page")}</h3> */}
    </div>
  );
}
