//-- Codice sostituito per creare l'elemento List e richiamato nel componente ListNames() 
// export default function ListNames() {
//     return (
//         <ul className="nav nav-pills flex-column mb-auto">
//             <li className="nav-link">Importante</li>
//             <li className="nav-link active">Film da vedere</li>
//             <li className="nav-link">Libri da leggere</li>
//         </ul>
//     );
// }


const navLinkStyle = { cursor: "pointer" };
function List({ name, active }) {
    const classes = `nav-link ${active ? 'active' : ''}`
    return (
        <li className={classes} style={navLinkStyle}>
            {name}
        </li>
    );
}
export default function ListNames() {
    return (
        <ul className="nav nav-pills flex-column mb-auto">
            <List name="Importante" />
            <List name="Film da vedere" active={true} />
            <List name="Libri da leggere" />
        </ul>
    );
}