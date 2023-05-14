import Nav from "./components/Nav";
import Footer from './components/Footer.js'
import {Outlet} from "react-router-dom";

export default function Layout (props) {
    return <div>
        <Nav />
        <Outlet />
        <Footer />
    </div>
}