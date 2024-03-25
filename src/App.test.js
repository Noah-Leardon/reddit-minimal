import { screen, render } from "@testing-library/react";
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
    // Integration test - need to move to seperate file
    it('Renders the Header Component', () => {
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
    })
    it('Renders the SearchBar component', () => {
        const searchBar = screen.getByTestId('searchbar')
        expect(searchBar).toBeInTheDocument()
    })
})