import { useState ,useEffect } from "react";
import { toast } from "react-toastify";
import { Card,CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

import axios from "axios";
import Todo from "./Todo";
import base_url from "../../api/bootapi";


const Read=()=>{
    
    const[todos,setTodos]=useState([])
    
    //Only one these things will get loaded at the time of mounting ,not at update mount
    //because of presence of empty passed as second argument to useEffect
    useEffect(() =>{
        document.title="View Todo";
        getTodosFromDatabase();
    },[])

  
    const getTodosFromDatabase = ()=>{
        axios(`${base_url}/todos`).then(
            (response)=>{
                //in case of success
                toast("🦄 All Todos Loaded",{position:"bottom-right",
                autoClose:1500});
                // console.log(response.data);
                setTodos(response.data);
            },
            (error)=>{
                //in case of error
                console.log(error);
                toast.error("Something Went Wrong",{position:"bottom-right",
                autoClose:1500});
            }
        )
    }

    //in order to delete todo from our todos array when course is delete successfully from
    //our database
    const refreshTodo=(id)=>{
        setTodos(
            todos.filter((c) => c.id!==id)
        )
    }

    return (
        <div>
            <h3 className="text-center mt-2 mb-3">PENDING</h3>
            {
                todos.length>0 
                ? todos.map ((item) => <Todo todo={item} refreshAllTodos={refreshTodo}/>) 
                : 
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle>Well Done 🦄</CardTitle>
                            <CardSubtitle>Your have completed all your work.</CardSubtitle>
                            <CardText>Keep adding Todos to keep track of your work.</CardText>
                            <Link className="list-group-item list-group-item-action" tag='a' to="/addTodo" >Add Todo</Link>
                        </CardBody>
                    </Card>
                </div>
            }
           
        </div>
    )
}

export default Read;