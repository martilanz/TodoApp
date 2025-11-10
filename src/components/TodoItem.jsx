//Conterrà la struttura della singola attività e aggiungiamo al suo interno due elementi:
//Checkbox per mostrare lo stato di completamento (done)
//Un elemento per mostrare il testo dell'attività (text)
import TrashIcon from "bootstrap-icons/icons/trash.svg?react"; //importiamo l'icona specificando il path relativo all'interno della cartella node_modules. Inoltre per importare immagini svg come componenti ho installato vite-plugin-svgr



const todoClasses = "d-flex align-items-center list-group-item my-1 border-rounded-1"
const btnClasses = "btn btn-sm btn-outline-secondary mx-1 py-0 opacity-25 border-0"

const itemClasses = "list-group-item border rounded-1 my-1";
export default function TodoItem({ done, text }) {
    const textClasses = `mx-1 my-0 ps-3 flex-grow-1 ${done ? "text-decoration-line-through text-black-50" : ""
        }`;
    return (
        <li className={todoClasses}>
            <input
                className="form-check-input mx-1 my-0"
                type="checkbox"
                checked={done} 
                readOnly={true}
            />
            {/* <i className="bi bi-trash"></i> */}
            <p className={textClasses}>{text}</p>
            <button className={btnClasses}>
                <TrashIcon />
            </button>
            
        </li>
    );
}
