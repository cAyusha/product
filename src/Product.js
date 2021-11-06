import React from "react";
import "./style.css";
export default function Product(props){
  return(
    <div>
      {props.name}{props.id}
      </div>
  )
}