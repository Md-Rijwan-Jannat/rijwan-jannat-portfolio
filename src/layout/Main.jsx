import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Footer from "../components/Share/Footer/Footer";
import Navbar from "../components/Share/Navbar/Navbar";


const Main = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default Main;