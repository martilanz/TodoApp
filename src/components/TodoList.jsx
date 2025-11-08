import TodoItem from "./TodoItem";

const itemClasses = "list-group-item border rounded-1 my-1";

// <li className={itemClasses}>Prima attività</li>
// <li className={itemClasses}>Seconda attività</li>
// <li className={itemClasses}>Terza attività</li>
export default function TodoList() {
    return (
        <ul className="list-group pb-3">
            <TodoItem done={false} text="Prima attività"/>
            <TodoItem done={true} text="Prima attività" />
            <TodoItem done={false} text="Terza attività"/>
        </ul>
    );
}