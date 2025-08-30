export default function LangageSwitcher ({onLangeChange}) {
    const handelLangeChange = (e)=>{
        e.preventDefault() ;
         onLangeChange(e.currentTarget.dataset.lang) ; 
    }
    return (
        <>
        <nav className="nav justify-content-center">
          <a className="nav-link active" data-lang='AR'  href="#" onClick={handelLangeChange}>Ar</a>
          <a className="nav-link"  data-lang='FR' href="#" onClick={handelLangeChange}>Fr</a>
          <a className="nav-link"  data-lang='EN' href="#" onClick={handelLangeChange}>En</a>
          <a className="nav-link"  data-lang='ES' href="#" onClick={handelLangeChange}>Es</a>
        </nav>
        </>
    )

}