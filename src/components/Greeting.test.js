import { render,screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test('renders Hello World as tekst', ()=>{
        //Arrange
        render(<Greeting />)
    
        //Act 
        //  Nothing...
    
        //Assert
        const helloWorldElement = screen.getByText('Hello world!')
        expect(helloWorldElement).toBeInTheDocument();
    })
})