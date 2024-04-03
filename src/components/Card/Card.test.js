import { screen, render } from "@testing-library/react";
import Card from "./Card";
import store from "../../store/store";
import { Provider } from "react-redux";


beforeEach(() => {
    render(
    <Provider store={store}>
         <Card />
    </Provider>
    )
})

describe('Card component', () => {
    it('Renders without errors', () => {
        const card = screen.getByTestId('card')
        expect(card).toBeInTheDocument()
    })
})