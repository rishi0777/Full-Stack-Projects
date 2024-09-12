import { Form, FormGroup,Label,Input,Button} from "reactstrap";
import { useEffect, useState} from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import base_url from "../../api/bootapi"
import axios from "axios"


const Update=()=>{
    const navigate=useNavigate()
    
    //creating state to manage the new todo object which is going to addded
    //setting state for everything inside todo
    const[id,setId]=useState(null);
    const[username,setUsername]=useState();
    const[title,setTitle]=useState();
    const[description,setDesciption]=useState();

    //mounting, when this component gets loaded at that time only title of the page is set
    useEffect(() =>{
        document.title="Update Todo";
        
        setId(localStorage.getItem('ID'))
        setUsername(localStorage.getItem('username'))
        setTitle(localStorage.getItem('title'))
        setDesciption(localStorage.getItem('description'))
    },[])

    
    //remove Data from from current Todo and reset the form 
    const resetForm=()=>{
        setTitle();
        setUsername();
        setDesciption();
                
        toast.warn("Form is cleared",{position:"bottom-right",autoClose:1500});
        document.getElementById("email").value="";
        document.getElementById("title").value="";
        document.getElementById("description").value="";
        
    }

    //posting updated data to database
    const updateData=()=>{
        const todo={"id":id, "username":username, "title":title, "description":description}
        axios.put(`${base_url}/todos/${id}`,todo).then(
            ()=>{
                toast.success("Todo Updated",{position:"bottom-right",
                    autoClose:1500});
                navigate('/todos')
            },
            (error)=>{
                //error
                console.log(error);
            }
        )
    }

    return (
        <div>
            <Form id="updateTodoForm">
                <h3 className="text-center my-2">UPDATE TODO</h3>

                <FormGroup>
                    <Label for="username">User Name</Label>
                    <Input id="username" name="username" 
                        placeholder="Write email here" 
                        type="username"
                        value={username}
                        onChange={(e)=>{
                            setUsername(e.target.value)
                        }}/>

                    
                </FormGroup>

                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input id="title" name="title" 
                        placeholder="Write title here" 
                        type="text"
                        value={title}
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }} />       
                </FormGroup>

                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input id="description" name="description" 
                        placeholder="Write title here" 
                        type="textarea"
                        value={description}
                        style={{height:250}}
                        onChange={(e)=>{
                            setDesciption(e.target.value)
                        }} />       
                </FormGroup>
            

                <Button onClick={updateData} color="success">UPDATE</Button>
                <Button className="mx-2" color="danger" onClick={resetForm}>CLEAR</Button>

            </Form>
        </div>
    )
}


export default Update;

