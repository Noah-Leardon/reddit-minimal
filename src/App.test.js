import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

describe('App', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
    })
    it('Renders without errors', () => {
        const app = screen.getByTestId('App')
        expect(app).toBeInTheDocument()
    })
    it('Renders the Header Component', () => {
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
    })
    it('Renders the SearchBar component', () => {
        const searchBar = screen.getByTestId('searchbar')
        expect(searchBar).toBeInTheDocument()
    })
     describe('End to End Tests', () => {
        it.skip('Fetches posts', async () => {
            const input= screen.getByPlaceholderText('Search')
            fireEvent.change(input, { target: { value: 'test' } });
            expect(input.value).toEqual('test')

            const form = screen.getByTestId('form')
            fireEvent.submit(form)
            const posts = await screen.findAllByRole('list')
            expect(posts[0]).toBeInTheDocument()
            expect(input.value).toEqual("")
        })
     })
})