import { ListGroup} from "reactstrap";
import { Link } from "react-router-dom";

const Menu=()=>{
    return (
        <ListGroup className="my-2">
            <Link className="list-group-item list-group-item-action" tag='a' to="/" >Search</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/todos" >View Todos</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/addTodo" >Add Todo</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to='/contact' >Contact</Link>
        </ListGroup>
    )
}

export default Menu;