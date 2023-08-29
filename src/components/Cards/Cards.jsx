import Card from '../Card/Card';
import "./Cards.css"

export default function Cards(props) {
   const {characters, onClose} = props

   return (
   <div className='tarjeta'>
      {characters.map((character) =>(
         <Card key={character.id} character={character} onClose={() => onClose(character.id)}/>
      ))}
   </div>
   );
}


