import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe('SearchBar Component', () => {
    it('Renders without errors', () => {
        render(<SearchBar />)
        const searchBar = screen.getByTestId('searchbar')
        expect(searchBar).toBeInTheDocument()
    })
})