import { useEffect } from "react";
import { Row,Col,Card,CardBody,CardTitle } from "reactstrap";

import icon_github from '../../icons/github.svg'
import icon_linkedin from '../../icons/linkedin.gif'
import icon_port from '../../icons/port.svg'
import icon_gofast from '../../icons/gofast.svg'

const Contact=()=>{

    useEffect(() =>{
        document.title="Contact";
    },[])

    return (
        <div>
            <h3 className="text-center mt-2 mb-3">CONTACT</h3>
            <Card>
                <CardBody>
                    <Row>
                        <Col><CardTitle><img alt="NA" src={icon_port} style={{height:"1.4rem"}}/> Portfolio</CardTitle></Col>
                        <Col>
                            <CardTitle  className="list-group-item list-group-item-action"  tag="a" href="https://www.rishimishra.me/">Click Me</CardTitle>
                        </Col>
                    </Row>

                    <Row>
                        <Col><CardTitle><img alt="NA" src={icon_linkedin} style={{height:"1.4rem"}}/> LinkedIn</CardTitle></Col>
                        <Col>
                            <CardTitle  className="list-group-item list-group-item-action"  tag="a" href="https://www.linkedin.com/in/rishi-mishra/">Click Me</CardTitle>
                        </Col>
                    </Row>

                    <Row>
                        <Col><CardTitle><img alt="NA" src={icon_github} style={{height:"1.4rem"}}/> GitHub</CardTitle></Col>
                        <Col>
                            <CardTitle  className="list-group-item list-group-item-action"  tag="a" href="https://github.com/rishi0777">Click Me</CardTitle>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col><CardTitle><img alt="NA" src={icon_gofast} style={{height:"1.4rem"}}/> GoFast</CardTitle></Col>
                        <Col>
                            <CardTitle  className="list-group-item list-group-item-action"  tag="a" href="https://go-fast.herokuapp.com/">Click Me</CardTitle>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default Contact;