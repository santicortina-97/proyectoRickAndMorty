import { useState } from "react";


export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")

   function handleChange(event){
      setId(event.target.value)
   }




   return (
      <div className="search">
         <div className="inputContainer">
         <input type='search' onChange={handleChange} value={id} placeholder="Id: from 1 to 826"/>
         </div>
         <button onClick={() => onSearch(id)} className="button">Add</button>
      </div>
   );
}
