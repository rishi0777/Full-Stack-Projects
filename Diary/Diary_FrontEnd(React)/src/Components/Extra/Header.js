import {Card, Container, CardBody} from 'reactstrap'


const Header=()=>{
    return (
        <div>
            <Container>
            <Card className='my-2 bg-warning'>
                <CardBody>
                    <h1 className='text-center my-2'>YOUR DIARY</h1>
                </CardBody>
            </Card>
            </Container>
        </div>
    )
}

export default Header;