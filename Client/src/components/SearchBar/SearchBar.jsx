import { useState } from "react";
import style from "./searchBar.module.css"


export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")
   
   function handleChange(event){
      setId(event.target.value)
   }



   return (
      <div className={style.container}>
         <div className={style.containerInput}>
            <input type='search' onChange={handleChange} value={id} placeholder="Id: from 1 to 826"/>
         </div>
         <button onClick={() => onSearch(id)} className={style.boton}>Add</button>
      </div>
   );
}
