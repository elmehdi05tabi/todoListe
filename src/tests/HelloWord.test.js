import HelloWorld from "./HelloWorld";
import {render,screen} from '@testing-library/react' ; 
test('hello',()=>{
    const name = 'tabi' ; 
    render(<HelloWorld name='tabi'/>) ; 
    const element = screen.getByRole('name') ; 
    expect(element).toBeInTheDocument() ; 
    expect(element).toHaveTextContent(name) ;

})