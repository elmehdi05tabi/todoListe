import { BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Pages/Layoute"
import Blogs from "./Pages/Blogs"
import Contacts from "./Pages/Contacts"
import Home from "./Pages/Home"
import PageNotFoud from "./Pages/PageNotFoud"
export default function App() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index  element={<Home/>} />
                <Route path="Blogs" element={<Blogs/>} />
                <Route path="Contacts" element={<Contacts/>} />
                <Route path="*" element={<PageNotFoud />}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}