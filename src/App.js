import React from "react";
import "./style.css";
import Product from "./Product";

const name1 = "toster";
const id1= "1";
function toString(nm,id){
  return nm + ","+ id;
}
function clickHandler(){
  window.alert(toString (name1,id1))
}
export default function App() {
  return (
    <div>
      <Product name = {name1}  id= {id1}/>
      <button onClick = {clickHandler}>show product </button>
    </div>
  );
}
