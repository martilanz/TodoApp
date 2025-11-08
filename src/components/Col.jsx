//, il termine “children” si riferisce ai contenuti annidati all’interno di un componente.
//In altre parole, è un prop speciale che React fornisce automaticamente a ogni componente, e che rappresenta tutti gli elementi o i nodi JSX scritti tra i tag di apertura e chiusura del componente.
//Ti permette di inserire altri componenti o elementi JSX all’interno di un componente wrapper.
//È molto usata per creare componenti riutilizzabili e composabili, come layout, modali, card, ecc.


// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }
{/* <Card>
  <h2>Titolo</h2>
  <p>Questo è il contenuto della card.</p>
</Card> */} 

//Dentro la Card children conterrà:
// [
//   <h2>Titolo</h2>,
//   <p>Questo è il contenuto della card.</p>
// ]
export default function Col({ children, size, className = "", style }) {
  const colClass = `col${size ?  `-${size}` : ''}`
  const classes = `${colClass} ${className} p-3 overflow-scroll vh-100`
  return (
  
    <div className={classes} style={style}>
      {children}
    </div>
  );
}