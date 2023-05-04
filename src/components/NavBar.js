import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Section1 from "../components/Section1";

const style = {
  nav: {
    color: "white",
    fontSize: "larger",
    marginLeft: "60rem",
  },
};

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
       
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1p_FMdsxmKiCULx6mMuDaze19djhv6EDVfw&usqp=CAU"
              style={{ height: "60px", width: "190px" }}
              alt="icon"
            />
          
          <Nav className="me-auto">
            <Link to="/cart">
              {" "}
              <Nav style={style.nav}> View Cart</Nav>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Section1 />
    </>
  );
}

export default NavBar;
