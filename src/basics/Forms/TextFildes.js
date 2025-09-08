export default function TextFildes({children,labelName,inputName}) {
    console.log(children) ; 
    return (
        <>
        <label>{labelName}</label>
        <input type="text" name={inputName}/> 
        <div>{children}</div>
        </>
    )
}