import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import React from "react";

describe('SearchBar Component', () => {
    it('Renders without errors', () => {
        render(<SearchBar />)
        const searchBar = screen.getByTestId('searchbar')
        expect(searchBar).toBeInTheDocument()
    })
    it('updates the search term state on input change', () => {
        const { getByPlaceholderText } = render(<SearchBar />);
        
        // Simulate input change
        const input = getByPlaceholderText('Search');
        fireEvent.change(input, { target: { value: 'test' } });
        
        // Check if input value is updated
        expect(input.value).toBe('test');
      });
})