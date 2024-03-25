import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";

describe('SearchBar Component', () => {
    it('Renders without errors', () => {
        render(        
        <Provider store={store}>
            <SearchBar />
        </Provider>)
        const searchBar = screen.getByTestId('searchbar')
        expect(searchBar).toBeInTheDocument()
    })
    it('updates the search term state on input change', () => {
        const { getByPlaceholderText } = render(
        <Provider store={store}>
            <SearchBar />
        </Provider>
        );
        
        // Simulate input change
        const input = getByPlaceholderText('Search');
        fireEvent.change(input, { target: { value: 'test' } });
        
        // Check if input value is updated
        expect(input.value).toBe('test');
      });
})