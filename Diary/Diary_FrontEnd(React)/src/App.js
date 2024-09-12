import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { ToastContainer} from 'react-toastify';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from './Components/Extra/Menu'
import Header from './Components/Extra/Header'
import Search from './Components/Extra/Search';
import Contact from './Components/Extra/Contact';

import Create from './Components/CRUD/Create';
import Read from './Components/CRUD/Read';
import Update from './Components/CRUD/Update';


function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            <Col md={4}><Menu /></Col>
            <Col md={8}>

              <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/todos" element={<Read />} exact />
                <Route path="/addTodo" element={<Create />} exact />
                <Route path="/updateTodo" element={<Update />} exact />
                <Route path="/contact" element={<Contact />} exact />
              </Routes>

            </Col>
          </Row>
        </Container>


      </div>
    </Router>
  );
}

export default App;
