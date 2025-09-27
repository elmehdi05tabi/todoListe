import CounterClick from "../hoc/CounterClick"
import { screen,render, fireEvent } from "@testing-library/react";
describe('increment/decrement', () => { 
    test('count default value',()=>{
        const handelClick = jest.fn() ; 
        render(<CounterClick title={'clicke'} />) ; 
        const element =screen.getByTestId('count') ; 
        const incrementBtn = screen.getByTestId('increment')
        expect(element).toHaveTextContent(0) ; 
        fireEvent.click(incrementBtn) ; 
        fireEvent.click(incrementBtn) ; 
        fireEvent.click(incrementBtn) ; 
        expect(element).toHaveTextContent('3') ;
    })
 })