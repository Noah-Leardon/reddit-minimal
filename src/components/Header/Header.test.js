import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe('Header', () => {
    it('Renders without errors', () => {
        render(<Header />)
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
    })
    it('Renders an h1 element', () => {
        render(<Header />)
        const h1 = screen.getByRole('heading')
        expect(h1).toBeInTheDocument()
    })
    it('Displays text', () => {
        render(<Header />)
        const h1 = screen.getByRole('heading')
        expect(h1).toHaveTextContent('Reddit Minimal')
    })
})