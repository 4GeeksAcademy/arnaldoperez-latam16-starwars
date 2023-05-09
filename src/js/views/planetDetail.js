import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

export const PlanetDetail = () => {

  const { planetId }=useParams()

  return (
    <div className="text-center mt-5">
      <h1>Planet Detail</h1>
      <h2>Id: {planetId}</h2>      
    </div>
  );
}
