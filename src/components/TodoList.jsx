const itemClasses = "list-group-item border rounded-1 my-1";
export default function TodoList() {
    return (
        <ul className="list-group pb-3">
            <li className={itemClasses}>Prima attività</li>
            <li className={itemClasses}>Seconda attività</li>
            <li className={itemClasses}>Terza attività</li>
        </ul>
    );
}