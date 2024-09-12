import base_url from "../../api/bootapi"
import axios from "axios"
import { Form, FormGroup,Label,Input,Button} from "reactstrap";
import { useEffect, useState} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const Create=()=>{

    const form=document.getElementById("addTodoForm");
    const navigate=useNavigate();
    //mounting, only once when this component is loaded the title of the page
    useEffect(() =>{
        document.title="Add Todo";
    },[])

    //creating state to manage the new todo object which is going to addded
    const[todo,setTodo]=useState({})

    //When Add button is clicked what will happen
    const handleForm=(e)=>{
        const email=document.getElementById("username").value;
        const title=document.getElementById("title").value;
        const description=document.getElementById("description").value;
        

        (email==="" || title==="" || description==="" ) 
        ? invalidForm()
        : validForm(e);
        
    }
    //invalidForm
    const invalidForm=()=>{
        // console.log("Invalid Todo");
        toast.error("Fill all the fields.",{position:"bottom-right",
                autoClose:1500});
    }
    //Valid Form
    const validForm = (e) =>{
        // console.log("valid Form");
        //to remove all data from UI form
        form.reset();
        //to remove current data from todo object
        removeData();

        postDatatoServer(todo)
        e.preventDefault();   
    }

    //remove Data from from current Todo
    const removeData=()=>{
        setTodo({});
    }

    //creating function to post data to server
    const postDatatoServer=(todo)=>{
        axios.post(`${base_url}/todos`,todo).then(
            (response)=>{
                toast.success("Todo Added",{position:"bottom-right",
                autoClose:1500});
                navigate('/todos')
                // console.log(response+"success");
            },
            (error)=>{
                toast.error("Something Went Wrong",{position:"bottom-right",
                autoClose:1500});
                console.log("error"+error);
            }
        )
    }

    return (
        <div>
            <Form id="addTodoForm">
                <h3 className="text-center my-2">ADD TODO</h3>

                <FormGroup>
                    <Label for="username">User Name</Label>
                    <Input id="username" name="username" 
                        placeholder="Write username here" 
                        
                        onChange={(e)=>{
                            setTodo({...todo,username:e.target.value})
                        }}/>

                    
                </FormGroup>

                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input id="title" name="title" 
                        placeholder="Write title here" 
                        type="text"
                        onChange={(e)=>{
                            setTodo({...todo,title:e.target.value})
                        }} />
                    
                    
                </FormGroup>

                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input id="description" name="description" 
                        placeholder="Write description here" 
                        type="textarea"
                        style={{height:200}}
                        onChange={(e)=>{
                            setTodo({...todo,description:e.target.value})
                        }} />

                        
                </FormGroup>

                <Button onClick={handleForm} color="success">ADD</Button>
                <Button type="reset" className="mx-2" color="danger" onClick={()=>{
                    toast.warn("Form is cleared",{position:"bottom-right",
                    autoClose:1500});
                    removeData();}}>CLEAR</Button>
            </Form>
        </div>
    )
}

export default Create;