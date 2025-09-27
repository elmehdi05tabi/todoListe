import Sum from "./Sum"  ; 
import { render,screen, waitFor } from "@testing-library/react";
import renderer from 'react-test-renderer'
describe('unit test',()=>{
test('sum',()=>{
  const expected = 5 
  render(<Sum a={2} b={3}/>) ; 
  const element = screen.getByTestId('sum') ; 
  expect(element).toBeInTheDocument() ;
  expect(element).toHaveTextContent(expected); 
}) ; 
test('class',async ()=>{
  render(<Sum a={2} b={3}/>) ; 
  await waitFor(()=>{
    const element = screen.getByTestId('sum') ; 
    expect(element).not.toHaveClass('sum')
  })
})
test('spanpshot',()=>{
  console.log(renderer.create(<Sum  a={2} b={3}/>).toJSON()) ; 
})
})
