import React from "react";
import "../../styles/home.css";
import ListHorizontal from "../component/listHorizontal";

/**
 * Este es el componente home que carga las listas horizontales de los distintos elementos
 */
export const Home = () => {

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!</h1>
      {["films", "planets", "vehicles", "people", "starships","species"]
      .map(elementType =><ListHorizontal key={elementType} element={elementType} />)}
    </div>
  );
}
