import Container from "../components/Container";
import Footer from "../components/Share/Footer/Footer";
import Nav from "../components/Share/Nav/Nav";
import Navbar from "../components/Share/Navbar/Navbar";
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className="z-10">
            <Container>
                <Navbar />
                <Outlet />
                <Nav/>
                <Footer />
            </Container>
        </div>
    );
};

export default Main;