import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

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

    test('renders "Some paragraph is there" when the BUTTON was not clicked',()=>{
        //Arrange
        render(<Greeting />)

        //Act

        //Assert
        const paragraph = screen.getByText('Some paragraph is there',{exact:true})
        expect(paragraph).toBeInTheDocument();
    })

    test('renders "CHANGED" when the BUTTON was clicked',()=>{
        //Arrange
        render(<Greeting />)

        //Act
        const button = screen.getByRole('button')
        userEvent.click(button)

        //Assert
        const paragraph = screen.getByText('Change')
        expect(paragraph).toBeInTheDocument();
    })

    test('does not to render "Some paragraph is there" when the BUTTON is clicked',() => {
        //Arrange
            render(<Greeting />)
        //Act
            const button = screen.getByRole('button')
            userEvent.click(button)
        //Assert
            const paragraph = screen.queryByText('Some paragraph is there')
            expect(paragraph).not.toBeInTheDocument()
    })
})