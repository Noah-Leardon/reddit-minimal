import { screen, render } from "@testing-library/react";
import Card from "./Card";

beforeEach(() => {
    render(<Card />)
})

describe('Card component', () => {
    it('Renders without errors', () => {
        const card = screen.getByTestId('card')
        expect(card).toBeInTheDocument()
    })
})