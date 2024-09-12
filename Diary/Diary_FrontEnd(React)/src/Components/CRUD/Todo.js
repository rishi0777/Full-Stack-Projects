import axios from "axios";
import base_url from "../../api/bootapi"

import { toast } from "react-toastify";
import { Row,Col,Card,CardBody, CardTitle, CardText, Button,CardSubtitle} from "reactstrap"; 
import { useNavigate } from 'react-router-dom';


const Todo = ({todo,refreshAllTodos}) =>{
    const navigate=useNavigate();

    //for deleting todo from database
    const deleteTodo=()=>{
        // console.log(response.todo);
        axios.delete(`${base_url}/todos/${todo.id}`).then(
            (response)=>{
                // console.log(response.data);
                toast.success("Good Work Task Completed.",{position:"bottom-right",
                autoClose:1500});
                refreshAllTodos(todo.id);
            },
            (error)=>{
                toast.error("Database Not Connected.",{position:"bottom-right",
                autoClose:1500});
                // console.log(error+"not able to delete");
            }
        )
    }

    //for updating todo in database
    const setData = (todo) => {
        localStorage.setItem('ID', todo.id)
        localStorage.setItem('username', todo.username)
        localStorage.setItem('title', todo.title)
        localStorage.setItem('description', todo.description)
    }
    const updateTodo=()=>{
        axios.get(`${base_url}/todos/${todo.id}`).then(
            (response)=>{
                //success
                setData(response.data);
                navigate('/updateTodo');
            },
            (error)=>{
                //error
                console.log(error);
            }
        )
        
    }
    
    
    return (
        <div>
            <Card className="my-2">
                <CardBody>
                    <Row>
                        <Col md={9}><CardTitle>{todo.title}</CardTitle></Col>
                        <Col md={3}><CardSubtitle style={{fontWeight: 'bold'}}>User: {todo.username}</CardSubtitle></Col>
                    </Row>
                    <CardText>{todo.description}</CardText>
                    
                        
                    <Button color='danger' onClick={updateTodo}>Update</Button>
                    <Button color='success' className="mx-3" onClick={deleteTodo}>Done</Button>
        
                    
                </CardBody>
            </Card>
        </div>
    )
}

export default Todo;