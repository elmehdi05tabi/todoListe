import { Link, Outlet } from "react-router-dom"  ;
import { COLORS } from "../../Config/Dessign-system/Colors";
export default function Layout () {
    const backgroundStyle = {
        background : COLORS.primary
    }
    return (
        <>
        <nav className="nav-bar " style={backgroundStyle}>
            <ul className="nav justify-content-center ">
                <li className="nav-item">
                    <Link to='/' className="nav-link text-dark">Homme</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Blogs' className="nav-link text-dark">Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Contacts' className="nav-link text-dark">Constact</Link>
                </li>
            </ul>
        </nav>
        <div className="container-fluid w-75 mx-auto">
            <Outlet/>
        </div>
        </>
    )
}