import { useState } from "react";
import style from "./searchBar.module.css"


export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")
/*    const [name, setName] = useState("")
 */
   function handleChange(event){
      setId(event.target.value)
   }

/*    function handleName(event){
      setName(event.target.value)
      console.log(event.target.value)
   }
 */


   return (
      <div className={style.container}>
{/*          <input type='search' onChange={handleName} value={name} placeholder="Search Name"/>*/}
         <div className={style.containerInput}>
            <input type='search' onChange={handleChange} value={id} placeholder="Id: from 1 to 826"/>
         </div>
         <button onClick={() => onSearch(id)} className={style.boton}>Add</button>
      </div>
   );
}
