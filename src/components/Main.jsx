import Col from "./Col";
import TodoList from "./TodoList";
export default function Main(props) {
    //<div className="col-9 p-3">Main</div>
    //col-9 -> lo passiamo come size={9}
    return <Col size={9}>
        <TodoList />
    </Col>;

}