import { screen, render, fireEvent } from "@testing-library/react";
import configureStore from 'redux-mock-store'
import Card from "./Card";
import store from "../../store/store";
import { Provider } from "react-redux";

describe('Card component', () => {
    it('Renders without errors', () => {
        render(
            <Provider store={store}>
                 <Card />
            </Provider>
            )
        const card = screen.getByTestId('card')
        expect(card).toBeInTheDocument()
    })
    describe('Integration test', () => {
        it('Does not render a comment componenet right away', async () => {
            render(
                <Provider store={store}>
                     <Card />
                </Provider>
                )
            const comments = screen.getByTestId('comments')
            // console.log(comments)
            expect(comments).not.toContainElement(document.createElement('li'))
        })
        it('Handles comment links', () => {
            render(
                <Provider store={store}>
                     <Card />
                </Provider>
                )
            const link = screen.getByTestId('comments-link')
            fireEvent.click(link)
            
        })
    })
})