import { screen, render } from "@testing-library/react";
import App from "./App";

describe('App', () => {
    it('Renders without errors', () => {
        render(<App />)
        const app = screen.getByTestId('App')
        expect(app).toBeInTheDocument()
    })
    // Integration test - need to move to seperate file
    it('Renders the Header Component', () => {
        render(<App />)
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
    })
    it('Renders the SearchBar component', () => {
        render(<App />)
        const searchBar = screen.getByTestId('searchbar')
        expect(searchBar).toBeInTheDocument()
    })
})