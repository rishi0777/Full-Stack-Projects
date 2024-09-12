import { useEffect,useState } from "react";
import { Row,Input,Form } from "reactstrap";
import axios from "axios";
import { Card,CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

import icon_search from '../../icons/search2.gif'
import base_url from '../../api/bootapi';
import Todo from "../CRUD/Todo";

    
const Search=()=>{
    
    const[todos,setTodos]=useState([]);
    
    useEffect(() =>{
        document.title="Search";
        
    },[])
    
    //searching in database
    const searchDatabase=(content)=>{
        axios.get(`${base_url}/search/${content}`).then(
            (response)=>{
                setTodos(response.data);
            },
            ()=>{
                //error=> when everything inside searchBox is erased
                setTodos("")
                console.log("Database Down")
            }
        )
    }


    //when content inside input field searchbox is changed
    const onSearchChange = (e) => {
        //do not send request to database until and unless searchbox does contain anything
        if(e.target.value!=="")
            searchDatabase(e.target.value)
        else
            setTodos("");
    };



    const refreshTodo=(id)=>{
        setTodos(
            todos.filter((c) => c.id!==id)
        )
    }

    return (
        <div>
            <Row>
                <Form className="form-inline mt-2 mb-4">
                    <img alt="NA" src={icon_search} style={{height:"1.4rem"}}/> 
                    <Input id="searchBox" className="ml-3" type="text"  
                    onChange={onSearchChange}/>
                </Form>
            </Row>
           
            {
                todos.length>0 
                ? todos.map ((item) => <Todo todo={item} refreshAllTodos={refreshTodo}/>) 
                : 
                <Row>
                    <Card>
                        <CardBody>
                            <CardTitle>🦄 Information</CardTitle>
                            <CardSubtitle>In case user not found this dialog will popup</CardSubtitle>
                            <CardText>Type the username for whom you want to search todos</CardText>
                        </CardBody>
                    </Card>
                </Row>
            }
        </div>
    )
}
export default Search

