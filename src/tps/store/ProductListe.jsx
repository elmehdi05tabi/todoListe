import {useState,useEffect} from "react" ;
import Product from "./Product";
export default function ProductListe() {
    const [productListe,setProductListe] = useState([]) ; 
    const [searchInput,setSearchInput] = useState() ; 
    const [categorie,setCategories] = useState([]) ; 
    const [searchCategories,setSearchCategories] = useState() ; 
    // ? display all products 
    const displayProducts = ()=>{
        const productsTemp  = productListe.filter(product=>{
            return product.title.includes(searchInput) ||
             product.id.toString().includes(searchInput) ||
             product.description.includes(searchInput)  ; 
        }); 
        if(productsTemp.length >0){
            return  productsTemp.map((product,key)=>{
                return <Product products={product} key={key}/>
            })
        }else{
            return <tr>
                <td colSpan={7}>No items</td>
            </tr>
        }
    }
    // diplay categories 
    const diplayCategories = () =>{
        return categorie.map(categorie=>{
            return(
                <button className={'btn'+ searchCategories===categorie? 'btn-secondary': 'dark' } onClick={(e)=>{
                    e.preventDefault() ; 
                    setSearchCategories(categorie)
                }}>
                    {categorie}
                </button>
            )
        })
    }
    // ^ get api of products
    const getProduct = async ()=>{
        await fetch("https://fakestoreapi.com/products")
        .then(response=>response.json()) 
        .then(response=>setProductListe(response)) ; 
    }
    // * get api of categories 
    const getGategories = async ()=> {
        await fetch("https://fakestoreapi.com/products/categories")
        .then(response=>response.json())
        .then(response=>setCategories(response)) ; 
    }
    // & componentDidMount
    useEffect(()=>{
        getProduct() ; 
        getGategories() ; 
    },[])
    // ! search product 
    const handleSearch = (e)=>{
        e.preventDefault() ;
        const search = document.getElementById("search").value.trim() ; 
        setSearchInput(search) ; 
    }
    return (
        <div className="container-fluid mx-auto w-75 my-3" > 
    <h2>Search :</h2>
    <form>
    <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label">Search</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="search" className="form-control"/>
                    </div>
                    <div className="col-auto">
                        <input className='btn btn-dark mx-2' type="submit" value='Search' onClick={handleSearch}/>
                   </div>
        </div>
        <hr />
        <div className="btn-groupe row g-3 align-items-center">
            <h3>Gategories :</h3>
            {diplayCategories()}
        </div>
    </form>
        <h1 className="text-danger">Products:</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Categorie</th>
                    <th>Image</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                    {displayProducts()}
            </tbody>
        </table>
        </div>
    )
}