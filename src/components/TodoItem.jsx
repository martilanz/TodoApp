//Conterrà la struttura della singola attività e aggiungiamo al suo interno due elementi:
//Checkbox per mostrare lo stato di completamento
//Un elemento per mostrare il testo dell'attività
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
            />
            <p className={textClasses}>{text}</p>
        </li>
    );
}