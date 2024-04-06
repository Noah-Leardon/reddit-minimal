import { render, screen, fireEvent, getAllByRole } from "@testing-library/react";
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
      it('Handles click events', () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )
        const searchTerm = screen.getByPlaceholderText('Search')
        const form = screen.getByTestId('form')
        fireEvent.submit(form)

        expect(searchTerm.textContent).toEqual("")
      })
      it('Displays a loading img while loading', () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )
        const img = screen.getByAltText('loading')
        expect(img).toBeInTheDocument()
      })
      it('Displays fetched posts', async () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )
        const post = await screen.findAllByRole('list')
        expect(post[0]).toBeInTheDocument
      })
      it('Handles select events', () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )
        const select = screen.getByRole('combobox')

        select.value = 'hot';

        fireEvent.change(select)
        expect(select.value).toEqual('hot')
      })
      it('Handles subreddit clicks', async () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )
        const post = await screen.findAllByTestId('card')
        const list = screen.getAllByRole('listitem')
        for (let item of list) {
            fireEvent.click(item)
        }
        const newPosts = await screen.findAllByTestId('card')
        expect(newPosts).toBeTruthy()
      })
      it('displays error message when there is an error', async () => {
      });
})